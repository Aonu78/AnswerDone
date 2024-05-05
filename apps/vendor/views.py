
from django.contrib.auth import login as auth_login 
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from django.shortcuts import render, redirect
from .models import Userprofile
from django.shortcuts import redirect, render, get_object_or_404
from django.contrib.auth import authenticate,login,logout
from django.contrib.sites.shortcuts import get_current_site
from django.template.loader import render_to_string
from django.views.decorators.csrf import csrf_exempt
from django.utils.encoding import force_bytes,force_str,DjangoUnicodeDecodeError
from django.utils.http import urlsafe_base64_decode,urlsafe_base64_encode
from django.contrib.auth.tokens import PasswordResetTokenGenerator
from .forms import LoginForm, PasswordChangeForm, PasswordResetForm, SetPasswordForm
from .forms import RegistrationForm, ProductForm
from django.core.mail import send_mail
from django.contrib import messages as msg
from django.views import View
import decimal
from django.utils.decorators import method_decorator 
from ..store.models import Product, Institute
from ..store.models import Category as store_category
from ..core.models import ChargePrice, Latest_Articles
import threading 
from email.message import EmailMessage
# from django.core.mail import EmailMessage
from . import email_logins
from .utils import generate_token
from django.core import mail
from django.conf import settings
import smtplib
import threading
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from rest_framework import generics
from .serializers import LatestArticlesSerializer
class EmailThread(threading.Thread):
    def __init__(self, email_message):
        self.email_message = email_message
        threading.Thread.__init__(self)

    def run(self):
        with smtplib.SMTP(email_logins.SERVER, 587) as server:
            # print("Enter Email")
            server.starttls()
            # print("Enter starlit")
            server.login(email_logins.EMAIL, email_logins.PASS)
            # print("Enter login")
            server.sendmail('support@answerdone.com', self.email_message['To'], self.email_message.as_string())
            # print("Email sended to User")


class ActivateAccount(View):
    def get(self,request,uidb64,token):
        try:
            uid=force_str(urlsafe_base64_decode(uidb64))
            user=User.objects.get(pk=uid)
        except Exception as identifier:
            user=None
        if user is not None and generate_token.check_token(user,token):
            user.is_active = True
            user.save()
            
            msg.info(request,"Account activated successfully")
            return redirect('login')
        return render('registration/activate_fail.html')

class LoginView(View):
    def get(self, request):
        form = LoginForm()
        return render(request, 'registration/login.html', {'form': form})

    def post(self, request):
        if request.method == "POST":
            # print("post is working")
            username = request.POST.get('username')
            password = request.POST.get('password')
            next_url = request.GET.get('next')  
            # print(username,password,next_url)
            if '@' in username:
                try:
                    user = User.objects.get(email=username)
                    validate_email(username)
                    myuser = authenticate(username=user.username, password=password)
                except ValidationError:
                    myuser = authenticate(username=username, password=password)
            else:
                myuser = authenticate(username=username, password=password)
            if myuser is not None:
                if myuser.is_superuser:
                    msg.error(request, "Superusers are not allowed to login.")
                else:
                    login(request, myuser)
                    msg.success(request, "Login Success")
                    return redirect(next_url or '/dashboard/')
            else:
                msg.warning(request, "Invalid username or password")
                return redirect("login")


class RegistrationView(View):
    def get(self, request):
        form = RegistrationForm()
        return render(request, 'registration/register.html', {'form': form})
    
    def post(self, request):
        if request.method == "POST":
            form = RegistrationForm(request.POST)
            if form.is_valid():
                username = form.cleaned_data["username"]
                email = form.cleaned_data["email"]
                password = form.cleaned_data["password1"]
                confirm_password = form.cleaned_data["password2"]
                
                if password != confirm_password:
                    # print("Passwords do not match")
                    msg.warning(request, "Passwords do not match")
                    return redirect("register")
                
                try:    
                    if User.objects.get(email=email):
                        # print("Email already taken")
                        msg.warning(request, "Email already taken")
                        return redirect("register")
                except User.DoesNotExist:
                    # print("Creating New User")
                    user = User.objects.create_user(username=username, email=email, password=password)
                    user.is_active=False
                    user.save()  
                    Userprofile.objects.create(user=user)
                    current_site = get_current_site(request)
                    # print("Creating New Profile")
                    html_content=render_to_string("registration/activate.html",{
                        "user":user,
                        "domain":current_site,
                        "uid":urlsafe_base64_encode(force_bytes(user.pk)),
                        "token":generate_token.make_token(user),
                        
                    })
                    # print(html_content)

                    email_message = MIMEMultipart()
                    email_message["From"] = "support@answerdone.com"
                    email_message["To"] = email
                    email_message["Subject"] = "Activate your store account"
                    html_part = MIMEText(html_content, "html")
                    email_message.attach(html_part)
                    # print("Creating Email Attaching")
                    email_thread = EmailThread(email_message)
                    email_thread.start()
                    # with smtplib.SMTP(email_logins.SERVER, 587) as server:
                    #     server.starttls()
                    #     server.login(email_logins.EMAIL, email_logins.PASS)
                    #     server.sendmail('support@answerdone.com', email, email_message.as_string())
                    # print("Activate your account by clicking the link in your mailbox")
                    msg.success(request, "Activate your account by clicking the link in your mailbox")
                    return redirect("register")
        else:
            form = RegistrationForm()

        return render(request, 'registration/register.html', {'form': form})

class RequestEmailReset(View):
    def get(self,request):
        form = PasswordResetForm()
        return render(request, 'registration/forgot-password.html',{'form':form})
    
    def post(self,request):
        email = request.POST['email']
        user=User.objects.filter(email=email)
        # print(user)
        # try:
        if user.exists:
            current_site = get_current_site(request)
            # print("commin...")
            message=render_to_string("password_reset_email.html",{
                "user":user,
                "domain":current_site,
                "uid":urlsafe_base64_encode(force_bytes(user[0].pk)),
                "token":PasswordResetTokenGenerator().make_token(user[0]),         
            })
            email_message = EmailMessage()
            email_message.set_content(message)
            email_message['Subject'] = "Reset your account"
            email_message['From'] = email_logins.EMAIL
            email_message['To'] = email
            
            email_thread = EmailThread(email_message)
            email_thread.start()
        
            # print("#################################")
            msg.success(request, "Reset your account by clicking the link in your mailbox")
            return redirect("forgot_password")
            # return render(request,"account/password_reset_done.html")
        else:
            msg.warning(request,"Invalid Email")
            return redirect("register")

class LatestArticlesAPIView(generics.ListAPIView):
    queryset = Latest_Articles.objects.all()
    serializer_class = LatestArticlesSerializer