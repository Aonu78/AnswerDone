from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required
from django.contrib.contenttypes.models import ContentType
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db.models import Q, Sum
from apps.store.models import Product
from ..store.cart import Cart
from .models import ServiceCosts, ChargePrice,Copyright_Request
from ..vendor.forms import OrderForm
from ..vendor.models import OrderItem, Order
from ..store.models import Institute, Category, Bundle, Courses
from django.contrib import sitemaps
from django.utils.text import slugify
from django.conf import settings
from django.http import JsonResponse
from django.contrib import messages
import os
from django.contrib.auth.decorators import user_passes_test
from .models import Question_Answer, Qna_Price, QA_Types
import json
from functools import wraps
from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.urls import reverse
from ..vendor.api import call_message

def custom_404_view(request, exception=None):
    return render(request, '404.html', status=404)

def super_admin_required(function):
    actual_decorator = user_passes_test(
        lambda u: u.is_authenticated and u.is_superuser,
        login_url='/admin/', 
    )
    return actual_decorator(function)
def logout_superuser_admin_staff(view_func):
    @wraps(view_func)
    def wrapper(request, *args, **kwargs):
        # Check if the user is a superuser, admin, or staff member
        if request.user.is_authenticated:
            user = request.user
            if user.is_superuser or user.is_staff:
                logout(request)  # Logout the user
                return HttpResponseRedirect(reverse('logout'))  # Redirect to logout page

        return view_func(request, *args, **kwargs)

    return wrapper

@staff_member_required
def question_answer(request):
    product = Product.objects.filter(status='ACTIVE',user=request.user)
    print(product)
    numbers = range(50) 
    qnaprice = Qna_Price.objects.first()
    qa_types = QA_Types.objects.all()
    return render(request, 'core/question_answer.html', {
        'product':product,'numbers':numbers,'qnaprice':qnaprice,"qa_types":qa_types
        })

@staff_member_required
def product_add_admin(request):
    if request.POST:
        print(request.POST.dict())
        title = request.POST.get('title')
        # category = request.POST.get('category')
        # course = request.POST.get('course')
        author = request.POST.get('author')
        publisher = request.POST.get('publisher')
        isbn = request.POST.get('isbn')
        edition = request.POST.get('edition')
        description = request.POST.get('description')
        category = Category.objects.filter(id=request.POST.get('category')).first()
        course = Courses.objects.filter(id=request.POST.get('course')).first()
        image_file = request.FILES.get('image')
        product = Product.objects.create(user=request.user,title=title,category=category,course=course,author=author,publisher=publisher,isbn=isbn,edition=edition,description=description,image=image_file)
        if image_file:
            product.image = image_file
            product.save()
        messages.success(request, 'Books Uploaded Successfuly!')
    category = Category.objects.all()
    institute = Institute.objects.all()
    course = Courses.objects.all()
    chargeprice = ChargePrice.objects.first()
    return render(request, 'core/product_add_admin.html', {'category':category,'institute':institute,'course':course,'chargeprice':chargeprice})


def question_answer_add(request):
    print(request.POST.dict())
    print()
    if request.method == 'POST':
        try:
            print(request.POST.dict())
            title = request.POST.get('title')
            product_id = request.POST.get('product')
            question_type = request.POST.get('question_type')
            question_no = request.POST.get('question_no')
            question = request.POST.get('question')
            short_answer = request.POST.get('short_answer')
            answer = request.POST.get('answer')
            chapter_no = request.POST.get('chapter_no')
            price = request.POST.get('qa_price')
            
            prod = Product.objects.get(id=product_id)
            quest_type = QA_Types.objects.get(id=question_type)
            
            question_answer = Question_Answer.objects.create(
                user=request.user,
                title=title,
                product=prod,
                chapter_no=chapter_no,
                question_type=quest_type,
                question_no=question_no,
                question=question,
                short_answer=short_answer,
                answer=answer,
                price=price,
                slug=slugify(title)
            )
            
            messages.success(request, 'Question_Answer instance created successfully!')
            return redirect('question_answer')
        
        except Product.DoesNotExist:
            messages.error(request, 'Product with the provided ID does not exist!')
            return redirect('question_answer')  # Redirect to the form page
            
        except Exception as e:
            messages.error(request, f'An error occurred: {str(e)}')
            return redirect('question_answer')  # Redirect to the form page
    else:
        messages.error(request, 'Only POST requests are allowed!')
        return redirect('question_answer')  # Redirect to the form page



def upload_image(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        # Define the directory where you want to save the uploaded images
        upload_dir = os.path.join(settings.MEDIA_ROOT, 'images')  # Assuming you want to save images in the 'images' directory within MEDIA_ROOT
        if not os.path.exists(upload_dir):
            os.makedirs(upload_dir)
        # Save the uploaded image to the filesystem with the same filename
        filepath = os.path.join(upload_dir, uploaded_file.name)
        with open(filepath, 'wb') as f:
            for chunk in uploaded_file.chunks():
                f.write(chunk)
        # Construct the URL of the uploaded image
        image_url = os.path.join(settings.MEDIA_URL, 'images', uploaded_file.name)
        return JsonResponse({'location': image_url})
    return JsonResponse({'error': 'Invalid request'}, status=400)

# Create your views here.
@logout_superuser_admin_staff
def index(request):
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    # print("***********************")
    # print(Product.objects.filter(file='').count())
    # print("***********************")
    # print()
    books = []
    docu = []
    counter1 = 0
    counter2 = 0
    products = Product.objects.filter(status='ACTIVE')
    for product in products:
        if counter1 + counter2 >= 24:
            break
        if product.file and counter1 <= 12:
            books.append(product)
            counter1 += 1
        else:
            if counter2 <= 12:
                docu.append(product)
                counter2 += 1
    # print(len(books))
    # print(len(docu))
    # print("***********************")

    products = Product.objects.filter(status='ACTIVE', file__isnull=False).order_by('-created_at')[:13]
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = products
    nav_university = Institute.objects.order_by('-created_at')[:12]
    cart = Cart(request)
    answer_count = Question_Answer.objects.all().count()
    product_count = Product.objects.all().count()
    earn_count = OrderItem.objects.aggregate(total_price=Sum('price'))['total_price']
    university_count = Institute.objects.all().count()
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    return render(request, 'core/index.html',{
        'products':docu,'ismain':True,
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,'books':books,
        'answer_count':answer_count,'product_count':product_count,'earn_count':earn_count,'university_count':university_count,
        'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category
    })

@logout_superuser_admin_staff
def conatactpage(request):
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    return render(request, 'core/contact.html',{'cart':cart,'cart_product':len(cart),'total_cost':total_cost})

@logout_superuser_admin_staff
def sell_study_notes(request):
    title = "Sale Study Notes: Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    shop = ServiceCosts.objects.first()
    products = Product.objects.filter(status='ACTIVE').order_by('-created_at')[:13]
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = products
    nav_university = Institute.objects.order_by('-created_at')[:12]
    return render(request, 'core/sell-study-notes.html', {
            'cart':cart,'cart_product':len(cart),'total_cost':total_cost,'shop':shop,
            'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

@logout_superuser_admin_staff
def faq(request):
    title = "FAQ: Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    shop = ServiceCosts.objects.first()
    products = Product.objects.filter(status='ACTIVE').order_by('-created_at')[:13]
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = products
    nav_university = Institute.objects.order_by('-created_at')[:12]
    return render(request, 'core/faq.html', {
            'cart':cart,'cart_product':len(cart),'total_cost':total_cost,'shop':shop,
            'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

@logout_superuser_admin_staff
def all_school(request):
    title = "List of School, College, University: Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']

    products = Product.objects.filter(status='ACTIVE').order_by('-created_at')[:13]
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = products
    nav_university = Institute.objects.order_by('-created_at')[:12]
    institute = Institute.objects.all()
    return render(request, 'core/school.html', {
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
        'title':title,'description':description,'institute':institute,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

@logout_superuser_admin_staff
def copyright(request):
    title = "CopyRight: Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']

    products = Product.objects.filter(status='ACTIVE').order_by('-created_at')[:13]
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = products
    nav_university = Institute.objects.order_by('-created_at')[:12]
    institute = Institute.objects.all()
    if request.method == 'POST':
        Copyright_Request.objects.create(username=request.POST.get('username'),
            email=request.POST.get('email'),
            url=request.POST.get('url'),
            description=request.POST.get('description'))
    return render(request, 'core/copyright.html', {
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
        'title':title,'description':description,'institute':institute,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

@login_required
def checkout(request):
    # print(request.POST.get('tr_payid'))
    form = OrderForm()
    shop = ServiceCosts.objects.first()
    cart = Cart(request)
    total_cost_price = 0
    total_cost = 0
    for item in cart:
        total_cost_price += item['total_price']
    total_cost = total_cost_price + shop.service_costs
    if request.method == 'POST':
        form = OrderForm(request.POST)

        if form.is_valid():
            order = form.save(commit=False)
            order.created_by = request.user
            order.paid_amount = request.POST.get('paid_amount')
            order.tr_id = request.POST.get('tr_id')
            order.tr_name = request.POST.get('tr_name')
            order.tr_email = request.POST.get('tr_email')
            order.tr_payer_id = request.POST.get('tr_payer_id')
            order.tr_payid = request.POST.get('tr_payid')
            order.tr_merchant_id = request.POST.get('tr_merchant_id')
            order.is_paid = True
            order.save()

            for item in cart:
                item_type = item['item_type']
                item_id = item['item_id']
                content_type = None
                
                model_class = None
                if item_type == 'note':
                    model_class = Product
                    product = Product.objects.get(id=item_id)
                    recipient_email = product.user.email
                    message_text = "Dear Answer Done User, Your document has been sold. You can check your balance by logging in to answerdone.com."
                    call_message("Document Sold", recipient_email, message_text)

                elif item_type == 'bundle':
                    model_class = Bundle
                elif item_type == 'question':
                    model_class = Question_Answer

                if model_class:
                    content_type = ContentType.objects.get_for_model(model_class.objects.get(id=item_id))
                    
                OrderItem.objects.create(
                    order=order,
                    content_type=content_type,
                    object_id=item_id,
                    price=item['total_price'],
                    quantity=item['quantity']
                )
                
            cart.clear()

            return redirect('index')
    else:
        form = OrderForm()

    return render(request, 'core/shoppingcart.html',{'cart':cart,'form':form,'cart_product':len(cart),'total_cost':total_cost,'shop':shop})

@logout_superuser_admin_staff
def termsofuse(request):
    return render(request, 'core/termsofuse.html',{})
@logout_superuser_admin_staff
def privacy_policy(request):
    return render(request, 'core/privacy-policy.html',{})
@logout_superuser_admin_staff
def aboutus(request):
    return render(request, 'core/aboutus.html',{})

@login_required
@logout_superuser_admin_staff
def delete_profile(request):
    user = request.user
    user.delete()
    return redirect('logout')



