from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from django.db.models import Q, Sum
from django.contrib.auth.models import User
from .serializers import UserUpdateSerializer
from ..store.models import Category
from ..vendor.models import Product

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