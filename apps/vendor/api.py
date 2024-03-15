from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from django.db.models import Q, Sum
from django.contrib.auth.models import User
from .serializers import UserUpdateSerializer, BundleSerializer
from ..store.models import Category
from ..vendor.models import Product
from rest_framework.decorators import api_view
from ..store.models import Bundle
from django.utils.text import slugify


class UserUpdateView(APIView):
    def put(self, request, pk):
        user = User.objects.get(pk=pk)
        serializer = UserUpdateSerializer(user, data=request.data)
        if serializer.is_valid():
            new_username = serializer.validated_data.get('username')
            if User.objects.filter(username=new_username).exclude(pk=pk).exists():
                return Response({'error': 'Username already exists.'}, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def get_suggestions(request):

    results = [
        {1:2,2:3,3:4},
        {1:2,2:3,3:4}
    ]
    return JsonResponse(results, safe=False)

def get_search_result_count(request):
    query = request.GET.get('s')
    filter = request.GET.get('filter')
    print(request.GET)
    if filter is not None:
        count = Product.objects.filter(
             Q(category__slug=filter) &
                Q(title__icontains=query) |
                Q(course__icontains=query) |
                Q(institute__title__icontains=query) 
            ).filter(status='ACTIVE').count()    
    else:
        count = Product.objects.filter(
                Q(title__icontains=query) |
                Q(description__icontains=query) |
                Q(course__icontains=query) |
                Q(institute__title__icontains=query) |
                Q(book__icontains=query)
            ).filter(status='ACTIVE').count()
    return JsonResponse(count, safe=False)

def get_institution_dropdown_content(request):
    search_term = request.GET.get('searchTerm')
    categories = Category.objects.filter(title__icontains=search_term)
    if categories is None:
        categories = Category.objects.order_by('created_at')[:12]
    results = []
    for category in categories:
        result = {
            'id': category.slug,
            'text': category.title
        }
        results.append(result)
    return JsonResponse(results, safe=False)


def settings_edit(request):
    pass


@api_view(['POST'])
def create_bundle(request):
    print(request.POST.dict())
    if request.method == 'POST':
        if not request.user.is_authenticated:
            return Response({"error": "User not authenticated"}, status=status.HTTP_401_UNAUTHORIZED)
        
        data = request.data.copy()  
        product_ids = [key.split('_')[1] for key in data.pop('keys[]', []) if '_' in key]
        
        title = data.get('title', '')
        slug = slugify(title)
        data['slug'] = slug
        data['description'] = request.POST.get("desc")
        data['created_by'] = request.user.id
        serializer = BundleSerializer(data=data)
        if serializer.is_valid():
            bundle = serializer.save()            
            bundle.product.set(product_ids)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({"error": "Invalid request method"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
