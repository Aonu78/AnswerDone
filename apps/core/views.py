from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.db.models import Q, Sum
from apps.store.models import Product
from ..store.cart import Cart
from .models import ServiceCosts, ChargePrice,Copyright_Request
from ..vendor.forms import OrderForm
from ..vendor.models import OrderItem, Order
from ..store.models import Institute, Category
from django.contrib import sitemaps
from django.urls import reverse
from django.conf import settings
from django.http import JsonResponse
from django.contrib import messages
import os
from django.contrib.auth.decorators import user_passes_test
from .models import Question_Answer
import json

def super_admin_required(function):
    actual_decorator = user_passes_test(
        lambda u: u.is_authenticated and u.is_superuser,
        login_url='/admin/', 
    )
    return actual_decorator(function)

@super_admin_required
def question_answer(request):
    product = Product.objects.filter(status='ACTIVE')
    print(product)
    numbers = range(100) 
    return render(request, 'core/question_answer.html', {
        'product':product,'numbers':numbers
        })


def question_answer_add(request):
    print(request.POST.dict())
    print()
    if request.method == 'POST':
        try:
            product_id = request.POST.get('product')
            question_type = request.POST.get('question_type')
            question_no = request.POST.get('question_no')
            question = request.POST.get('question')
            short_answer = request.POST.get('short_answer')
            answer = request.POST.get('answer')
            
            prod = Product.objects.get(id=product_id)
            
            question_answer = Question_Answer.objects.create(
                user=request.user,
                product=prod,
                question_type=question_type,
                question_no=question_no,
                question=question,
                short_answer=short_answer,
                answer=answer
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
def index(request):
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']

    products = Product.objects.filter(status='ACTIVE').order_by('-created_at')[:13]
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = products
    nav_university = Institute.objects.order_by('-created_at')[:12]
    cart = Cart(request)
    user_count = User.objects.all().count()
    product_count = Product.objects.all().count()
    earn_count = OrderItem.objects.aggregate(total_price=Sum('price'))['total_price']
    university_count = Institute.objects.all().count()
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    return render(request, 'core/index.html',{
        'products':products,'ismain':True,
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
        'user_count':user_count,'product_count':product_count,'earn_count':earn_count,'university_count':university_count,
        'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category
    })

def conatactpage(request):
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    return render(request, 'core/contact.html',{'cart':cart,'cart_product':len(cart),'total_cost':total_cost})


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
    print(request.POST.get('tr_payid'))
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
                product = item['product']
                quantity = int(item['quantity'])
                price = item['product'].price * quantity
                try:
                    product_id = item['product'].id
                    prod = Product.objects.get(id=item['product'].id)
                    prod.purchased += 1  
                    prod.save() 
                    item = OrderItem.objects.create(order=order, product=product, price=price, quantity=quantity)
                    print("OrderItem created successfully")
                except Exception as e:
                    print("Error creating OrderItem:", e)

            cart.clear()

            return redirect('index')
    else:
        form = OrderForm()

    return render(request, 'core/shoppingcart.html',{'cart':cart,'form':form,'cart_product':len(cart),'total_cost':total_cost,'shop':shop})

def termsofuse(request):
    return render(request, 'core/termsofuse.html',{})

def privacy_policy(request):
    return render(request, 'core/privacy-policy.html',{})

def aboutus(request):
    return render(request, 'core/aboutus.html',{})

@login_required
def delete_profile(request):
    user = request.user
    user.delete()
    return redirect('logout')


