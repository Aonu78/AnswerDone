from django.shortcuts import render, get_object_or_404, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Product, Category, Institute
from django.db.models import Q, Sum, Avg
from django.contrib.auth.decorators import login_required
from django.contrib import messages as msg
from django.http import HttpResponseRedirect
from .models import Product, Institute, Courses
from .models import Category as store_category
from ..vendor.models import Order, OrderItem,Userprofile,Rating
from ..core.models import ChargePrice, ServiceCosts,Withdraw_Type,Withdraw_Request, Question_Answer
from .forms import ProductForm
from .cart import Cart
from django.utils import timezone
from django.http import JsonResponse

def search(request):
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    query = request.GET.get("s","")
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    if request.GET.get("instellingfilter") is not None:
        products = Product.objects.filter(
            Q(category__slug=request.GET.get("instellingfilter")) &
        Q(title__icontains=query) |
            Q(institute__title__icontains=query)
        ).filter(status='ACTIVE')  
    elif request.GET.get("institute") is not None:
        products = Product.objects.filter(
            Q(institute__slug=request.GET.get("institute")) &
        Q(title__icontains=query) |
            Q(institute__title__icontains=query)
        ).filter(status='ACTIVE')  
    elif request.GET.get("category") is not None:
        products = Product.objects.filter(
            Q(category__slug=request.GET.get("category")) &
        Q(title__icontains=query) |
            Q(institute__title__icontains=query)
        ).filter(status='ACTIVE') 
    elif request.GET.get("category") is not None and request.GET.get("institute") is not None:
        products = Product.objects.filter(
            Q(category__slug=request.GET.get("category")) &
            Q(institute__slug=request.GET.get("institute")) &
        Q(title__icontains=query) |
            Q(institute__title__icontains=query)
        ).filter(status='ACTIVE') 
    else:      
        products = Product.objects.filter(
            Q(title__icontains=query) |
            Q(description__icontains=query) |
            Q(course__title__icontains=query) |
            Q(institute__title__icontains=query) |
            Q(book__icontains=query)
        ).filter(status='ACTIVE')
   
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    all_category = Category.objects.order_by('title')
    all_university = Institute.objects.order_by('title')

    products_per_page = 20
    paginator = Paginator(products, products_per_page)
    page_number = request.GET.get('page', 1)
    try:
        paginated_products = paginator.page(page_number)
    except PageNotAnInteger:
        paginated_products = paginator.page(1)
    except EmptyPage:
        paginated_products = paginator.page(paginator.num_pages)

    for product in paginated_products:
        ratings = Rating.objects.filter(product=product)
        average_rating = ratings.aggregate(Avg('rating'))['rating__avg']
        product.average_rating = average_rating

    return render(request, 'store/search.html', {
        'query': query,
        'products': paginated_products,
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
        'title':title,'description':description,
        'all_category':all_category,'all_university':all_university,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

def qna(request):
    title = "Question & Answer Search for your given problem"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]

    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    
    query = request.GET.get("s")

    if request.GET.get("s") is not None:
        products = Question_Answer.objects.filter(
        Q(question__icontains=query) |
            Q(answer__icontains=query)).filter(status='Active').order_by('-created_at')
    elif request.GET.get("s") is not None and request.GET.get("instellingfilter") is not None:
        products = Question_Answer.objects.filter(
            Q(category__slug=request.GET.get("instellingfilter")) &
        Q(question__icontains=query) |
            Q(answer__icontains=query)).filter(status='Active').order_by('-created_at')
    else:      
        products = Question_Answer.objects.filter(status='Active').order_by('-created_at')

    products_per_page = 20
    paginator = Paginator(products, products_per_page)
    page_number = request.GET.get('page', 1)
    try:
        paginated_products = paginator.page(page_number)
    except PageNotAnInteger:
        paginated_products = paginator.page(1)
    except EmptyPage:
        paginated_products = paginator.page(paginator.num_pages)

    return render(request,'store/qna.html',{
        'query':query,
        'latest_products':paginated_products,
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost, 
        'ismain':False,'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

def like_qna(request, pk):
    qna = Question_Answer.objects.get(pk=pk)
    liked_qnas = request.session.get('liked_qnas', [])
    if pk in liked_qnas:
        return JsonResponse({'like_count': qna.like})
    else:
        qna.like += 1
        qna.save()
        liked_qnas.append(pk)
        request.session['liked_qnas'] = liked_qnas
        return JsonResponse({'like_count': qna.like})

def dislike_qna(request, pk):
    qna = Question_Answer.objects.get(pk=pk)
    disliked_qnas = request.session.get('disliked_qnas', [])
    if pk in disliked_qnas:
        return JsonResponse({'dislike_count': qna.dislike})
    else:
        qna.dislike += 1
        qna.save()
        disliked_qnas.append(pk)
        request.session['disliked_qnas'] = disliked_qnas
        return JsonResponse({'dislike_count': qna.dislike})
    
def category_detail(request, slug):
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    category = get_object_or_404(Category, slug=slug)
    products = category.products.filter(status='ACTIVE').all()
    products_per_page = 20
    paginator = Paginator(products, products_per_page)
    page_number = request.GET.get('page', 1)
    try:
        paginated_products = paginator.page(page_number)
    except PageNotAnInteger:
        paginated_products = paginator.page(1)
    except EmptyPage:
        paginated_products = paginator.page(paginator.num_pages)

    for product in paginated_products:
        ratings = Rating.objects.filter(product=product)
        average_rating = ratings.aggregate(Avg('rating'))['rating__avg']
        product.average_rating = average_rating
    all_category = Category.objects.order_by('title')
    all_university = Institute.objects.order_by('title')
    return render(request, 'store/search.html', {
        'category': category,
        'products': paginated_products,
        'ismain': False,
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
        'all_category':all_category,'all_university':all_university,
    })

def add_to_cart(request, product_id):
    cart = Cart(request)
    cart.add(product_id)  # Add the product to the cart
    cart.save()  # Save the cart
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))

def remove_from_cart(request, product_id):
    cart = Cart(request)
    cart.remove(product_id)  # Add the product to the cart
    cart.save()  # Save the cart
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))

@login_required
def rate_product(request, product_id):
    if request.method == 'POST':
        rating_value = int(request.POST.get('rating'))  # Convert rating to int
        description = request.POST.get('description')  # Don't convert description to int

        product = Product.objects.get(pk=product_id)
        user = request.user
        rating = Rating.objects.create(user=user, product=product, description=description, rating=rating_value)
        rating.save()

        return redirect('downloads')
    else:
        return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))


def product_detail(request,category_slug, slug):
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]

    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    products = Product.objects.get(slug=slug)
    products.views += 1  
    products.save() 
    category = Category.objects.get(slug=category_slug)
    latest_products = Product.objects.filter(category=category).filter(status='ACTIVE').order_by('-created_at')[:12]
    if products.user.date_joined:
        difference = timezone.now() - products.user.date_joined
        if difference.days < 365:
            time_since_registration = difference.days
        else:
            time_since_registration = difference.days // 365
    else:
        time_since_registration = None

    profile = Userprofile.objects.get_or_create(user=products.user)[0] 
    count_products = Product.objects.filter(user=products.user).filter(status='ACTIVE').count()

    for product in latest_products:
        ratings = Rating.objects.filter(product=product)
        average_rating = ratings.aggregate(Avg('rating'))['rating__avg']
        product.average_rating = average_rating
    ratings = Rating.objects.filter(product=products)
    average_rating = ratings.aggregate(Avg('rating'))['rating__avg'] 
    print(average_rating)
    if products.file:

        return render(request,'store/product_detail.html',{
            'products':products,'time_since_registration':time_since_registration,
            'latest_products':latest_products,'count_products':count_products,
            'cart':cart,'cart_product':len(cart),'total_cost':total_cost, 'ratings': ratings, 'average_rating': average_rating,
            'ismain':True,'title':title,'description':description,'profile':profile,
            'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category
        })
    else:
        return render(request,'store/book_detail.html',{
            'products':products,'time_since_registration':time_since_registration,
            'latest_products':latest_products,'count_products':count_products,
            'cart':cart,'cart_product':len(cart),'total_cost':total_cost, 'ratings': ratings, 'average_rating': average_rating,
            'ismain':True,'title':title,'description':description,'profile':profile,
            'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category
        })
    
@login_required
def purchased_product(request,category_slug, slug):
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    profile = Userprofile.objects.get_or_create(user=request.user)[0] 
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    
    products = Product.objects.get(slug=slug)
    products.views += 1  
    products.save() 
    category = Category.objects.get(slug=category_slug)
    latest_products = Product.objects.filter(category=category).filter(status='Active').order_by('-created_at')[:5]
    for product in latest_products:
        ratings = Rating.objects.filter(product=product)
        average_rating = ratings.aggregate(Avg('rating'))['rating__avg']
        product.average_rating = average_rating
    return render(request,'store/purchased_product.html',{
        'products':products,'profile':profile,
        'latest_products':latest_products,
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
        'ismain':True,'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

def school_detail(request, slug):
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    institute = Institute.objects.filter(slug=slug).first()
    if institute:
        products = Product.objects.filter(institute=institute).filter(status='ACTIVE')
    else:
        products = []
    # institute = get_object_or_404(Institute, slug=slug)
    # products = institute.products.all()
    products_per_page = 20
    paginator = Paginator(products, products_per_page)
    page_number = request.GET.get('page', 1)
    try:
        paginated_products = paginator.page(page_number)
    except PageNotAnInteger:
        paginated_products = paginator.page(1)
    except EmptyPage:
        paginated_products = paginator.page(paginator.num_pages)
    
    for product in paginated_products:
        ratings = Rating.objects.filter(product=product)
        average_rating = ratings.aggregate(Avg('rating'))['rating__avg']
        product.average_rating = average_rating
    all_category = Category.objects.order_by('title')
    all_university = Institute.objects.order_by('title')
    return render(request, 'store/search.html', {
        'category': institute,'all_category':all_category,'all_university':all_university,
        'products': paginated_products,
        'ismain': False,'cart_product':len(cart),'total_cost':total_cost,
        'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category
    })

@login_required
def dashboard(request):
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']

    totalproducts = Product.objects.filter(user=request.user).count()
    order_items = OrderItem.objects.filter(product__user=request.user)
    order_count = Order.objects.filter(created_by=request.user).count()
    chargeprice = ChargePrice.objects.first()
    # order_earn_result = OrderItem.objects.filter(product__created_by_id=request.user.pk).aggregate(total_quantity=Sum('price')) or 0
    # order_earn_result = OrderItem.objects.filter(product__created_by=user).aggregate(total_earnings=Sum('price'))['total_earnings'] or 0
    order_earn_result = OrderItem.objects.filter(product__user_id=request.user.pk).aggregate(total_price=Sum('price'))
    # order_earn_result = OrderItem.objects.filter(product__user=request.user).aggregate(total_price=Sum('price'))['total_price']
    withdraw = Withdraw_Request.objects.filter(user=request.user).exclude(status='Failed').aggregate(total_amount=Sum('amount_withdraw'))['total_amount']
    if withdraw is None:
        withdraw = 0
    print(withdraw)
    servicecost = ServiceCosts.objects.first()
    if order_earn_result['total_price'] is not None:
        order_earn = order_earn_result['total_price'] - servicecost.service_costs 
    else:
        order_earn = 0.0 
    order_earn = round(order_earn - (order_earn * (chargeprice.charge_percentage / 100)), 2) - withdraw

    products = Product.objects.filter(user=request.user).exclude(status='Deleted')
    # products = request.user.product_set.exclude(status='Deleted').all()
    return render(request, 'dashboard.html',
                  {'totalproducts':totalproducts,
                   "products":products,
                   'cart':cart,
                   'cart_product':len(cart),'total_cost':total_cost,
                   'order_items':order_items,
                   'order_count':order_count,
                   'order_earn':order_earn,'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

                   })

@login_required
def courses(request):
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    return render(request, 'courses.html',{'cart':cart,'cart_product':len(cart),'total_cost':total_cost})

@login_required
def uploads(request):
    category = store_category.objects.all()
    institute = Institute.objects.all()
    course = Courses.objects.all()
    chargeprice = ChargePrice.objects.first()
    if request.method == 'POST':
        form = ProductForm(request.POST,request.FILES)
        print(request.POST.dict())
        print(form)
        if form.is_valid():
            product = form.save()
            msg.success(request, 'Product uploaded successfully!')
        else:
            msg.error(request, 'Failed to upload product. Please check the form.')
        return render(request, 'upload.html', {'form': form,'category':category,'institute':institute,'chargeprice':chargeprice,'course':course})
    form = ProductForm()
    return render(request, 'upload.html', {'form': form,'category':category,'institute':institute,'chargeprice':chargeprice,'course':course})

@login_required
def Edit_uploads(request,pk):
    product = Product.objects.filter(user=request.user).get(pk=pk)
    if request.method == 'POST':
        form = ProductForm(request.POST,request.FILES,instance=product)
        if form.is_valid():
            form.save()
            msg.success(request, 'Document Edited successfully!')
        else:
            msg.error(request, 'Failed to Edited product. Please check the form.')
    else:
        form = ProductForm(instance=product)
    return render(request, 'edit_product.html', {'form': form,'product':product})


@login_required
def delete_uploads(request, pk):
    try:
        product = Product.objects.filter(user=request.user).get(pk=pk)
        product.status = 'Deleted'
        product.save() 
        msg.success(request, 'Product deleted successfully!')
    except Product.DoesNotExist:
        msg.error(request, 'Product not found or you do not have permission to delete it.')
    
    return redirect('dashboard')

@login_required
def add_institute(request):
    if request.method == 'POST':
        title = request.POST.get('title')
        slug = title.replace(' ', '-')  
        institute = Institute.objects.create(title=title, slug=slug)
        institute.save()  
        msg.success(request, 'Institute Name Added successfully!')
        return redirect('add-institute')
    # else:
    #     msg.error(request, 'Please check the form.')
    return render(request, 'add-institute.html',{})


@login_required
def downloads(request):

    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    order_items = OrderItem.objects.filter(product__user=request.user)

    cart = Cart(request)
    total_cost = sum(item['total_price'] for item in cart)

    for order_item in order_items:
        ratings = Rating.objects.filter(product=order_item.product)
        committed = not ratings.filter(user=request.user).exists()
        order_item.committed = committed
        average_rating = round(ratings.aggregate(Avg('rating'))['rating__avg'], 1)
        order_item.average_rating = average_rating
        print(committed)

    return render(request, 'downloads.html', {
        'cart': cart,
        'cart_product': len(cart),
        'total_cost': total_cost,
        'order_items': order_items,
        'title': title,
        'description': description,
        'nav_university': nav_university,
        'nav_products': nav_products,
        'nav_category': nav_category
    })

@login_required
def user_uploads(request):
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']
    
    products = Product.objects.filter(user=request.user)
    return render(request, 'user_uploads.html', {'products':products,
            'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
            'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

@login_required
def wallet(request):
    if request.method == 'POST':
        Withdraw_Request.objects.create(user=request.user,username=request.POST.get('username'),email=request.POST.get('email'),acc_type=request.POST.get('acc_type'),amount_withdraw=request.POST.get('amount_withdraw'))    

    withdraw_type = Withdraw_Type.objects.all()
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']

    chargeprice = ChargePrice.objects.first()  
    order_earn_result = OrderItem.objects.filter(product__user_id=request.user.pk).aggregate(total_price=Sum('price'))
    
    withdraw = Withdraw_Request.objects.filter(user=request.user).exclude(status='Failed').aggregate(total_amount=Sum('amount_withdraw'))['total_amount']
    print(withdraw)
    if withdraw is None:
        withdraw = 0
    servicecost = ServiceCosts.objects.first()
    if order_earn_result['total_price'] is not None:
        order_earn = order_earn_result['total_price'] - servicecost.service_costs 
    else:
        order_earn = 0.0 
    order_earn = round(order_earn - (order_earn * (chargeprice.charge_percentage / 100)), 2) - withdraw

    withdraw_table = Withdraw_Request.objects.filter(user=request.user)
    return render(request, 'wallet.html', {
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,'order_earn':order_earn,'withdraw_type':withdraw_type,'withdraw_table':withdraw_table})


@login_required
def reviews(request):
    title = "Reviews: Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    order_items = OrderItem.objects.filter(product__user=request.user)
    rating = Rating.objects.filter(product__user=request.user)
    received_rating = Rating.objects.filter(user=request.user)
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']

    return render(request, 'reviews.html', {'rating':rating,'received_rating':received_rating,
            'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
            'title':title,'description':description,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category
    })

@login_required
def messages(request):
    return render(request, 'messages.html',{})

@login_required
def wishlist(request):
    return render(request, 'wishlist.html',{})

@login_required
def profile(request):
    title = "Buy and sell quality study notes and resources"
    description = 'Get assignments, textbook Answers, Beat exams, Win grades,and say thanks to Answerdone.'
    nav_category = Category.objects.order_by('-created_at')[:12]
    nav_products = Product.objects.order_by('-created_at').filter(status='ACTIVE')[:12]
    nav_university = Institute.objects.order_by('-created_at')[:12]
    profile = Userprofile.objects.get_or_create(user=request.user)[0] 
    cart = Cart(request)
    total_cost = 0
    for item in cart:
        total_cost += item['total_price']

    return render(request, 'settings.html',{
        'cart':cart,'cart_product':len(cart),'total_cost':total_cost,
            'title':title,'description':description,'profile':profile,
        'nav_university':nav_university,'nav_products':nav_products,'nav_category':nav_category

    })

@login_required
def settings_profile(request):
    if request.method == 'POST':
        print(request.POST)
        user = Userprofile.objects.get_or_create(user=request.user)[0] 

        if request.FILES:
            user.image = request.FILES['image'] 
        if request.POST.get('firstname'):
            user.firstname = request.POST.get('firstname')
        if request.POST.get('lastname'):
            user.lastname = request.POST.get('lastname')
        if request.POST.get('usertype'):
            user.usertype = request.POST.get('usertype')
        if request.POST.get('dob'):
            user.dob = request.POST.get('dob')
        if request.POST.get('Address'):
            user.Address = request.POST.get('Address')
        if request.POST.get('city'):
            user.city = request.POST.get('city')
        if request.POST.get('zipcode'):
            user.zipcode = request.POST.get('zipcode')
        if request.POST.get('state'):
            user.state = request.POST.get('state')
        if request.POST.get('country'):
            user.country = request.POST.get('country')
        if request.POST.get('education'):
            user.education = request.POST.get('education')
        if request.POST.get('academicyear'):
            user.academicyear = request.POST.get('academicyear')
        if request.POST.get('shoptitle'):
            user.shoptitle = request.POST.get('shoptitle')
        if request.POST.get('shopdescription'):
            user.shopdescription = request.POST.get('shopdescription')
        user.save()
    return HttpResponseRedirect(request.META.get('HTTP_REFERER', '/'))