from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import JsonResponse
from django.db.models import Q, Sum
from django.contrib.auth.models import User
from .serializers import UserUpdateSerializer, BundleSerializer, MessageSerializer, LatestArticlesSerializer
from ..store.models import Category
from django.shortcuts import get_object_or_404
from ..vendor.models import Product, Message, Subject, Userprofile
from rest_framework.decorators import api_view
from ..store.models import Bundle
from django.utils.text import slugify
import json
from django.contrib.auth.decorators import login_required
from email.message import EmailMessage
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from ..vendor.views import EmailThread
from ..vendor import email_logins
from ..core.models import Latest_Articles
from rest_framework import viewsets

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
        data['description'] = data.get('desc', '')
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


# class SendMessageView(APIView):
#     def post(self, request, *args, **kwargs):
#         serializer = MessageSerializer(data=request.data)
#         if serializer.is_valid():
#             sender = request.user  
#             receiver_username = serializer.validated_data['receiver']
#             receiver = User.objects.get(username=receiver_username)
#             subject = serializer.validated_data.get('subject', '')
#             message_text = serializer.validated_data['message']
#             if '@' in message_text:
#                 message_text = ""
#             if 'dotcom' in message_text:
#                 message_text = ""
#             if Message.objects.filter(sender=sender, receiver=receiver).exists():
#                 return Response({'detail': 'A message already exists between the sender and receiver'}, status=status.HTTP_400_BAD_REQUEST)            
#             subject, _ = Subject.objects.get_or_create(title=subject)
#             message = Message.objects.create(sender=sender, receiver=receiver, subject=subject, message=message_text)
#             return Response({'detail': 'Message sent successfully'}, status=status.HTTP_200_OK)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SendMessageView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = MessageSerializer(data=request.data)
        # print("***********")
        # print(serializer)
        # print("***********")
        if serializer.is_valid():
            sender = request.user  
            receiver_username = serializer.validated_data['receiver']
            receiver = User.objects.get(username=receiver_username)
            subject = serializer.validated_data.get('subject', '')
            message_text = serializer.validated_data['message']
            if '@' in message_text:
                message_text = ""
            if 'dotcom' in message_text:
                message_text = ""
            if Message.objects.filter(sender=sender, receiver=receiver).exists():
                return Response({'detail': 'A message already exists between the sender and receiver'}, status=status.HTTP_400_BAD_REQUEST)            
            subject, _ = Subject.objects.get_or_create(title=subject)
            message = Message.objects.create(sender=sender, receiver=receiver, subject=subject, message=message_text)
            # print("***********")
            # print(serializer.validated_data.get('subject', ''), receiver.email ,message_text)
            # print("***********")
            call_message(serializer.validated_data.get('subject', ''), receiver.email ,message_text)
            return Response({'detail': "Message sent successfully for : {{serializer.validated_data.get('subject', '')}}"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def call_message(name,email,message):
    # print("Calling Message here")
    # print("******************************")
    email_message = EmailMessage()
    email_message.set_content(message)
    email_message['Subject'] = "Answer Done Message Notification"
    email_message['From'] = name
    email_message['To'] = email
    
    email_thread = EmailThread(email_message)
    email_thread.start()

def receive_message(request):
    if request.method == 'POST':
        action = request.POST.get('action')

        if action == "send-reply":
            return send_reply(request)
        elif action == "delete-message":
            return delete_message(request)
        else:
            return JsonResponse({'error': 'Invalid action'}, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)

def message_seen(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        message_id = data.get('message_id')
        subject = get_object_or_404(Subject, title__iexact=message_id)
        messages = Message.objects.filter(subject=subject, receiver=request.user)
        messages.update(is_read=True)
        return JsonResponse({'message': 'Messages marked as seen successfully'}, status=200)
    else:
        return JsonResponse({'error': 'Invalid method'}, status=400)

def send_reply(request):
    sender = request.user
    receiver_username = request.POST.get('sendTo')
    receiver = User.objects.filter(username__iexact=receiver_username).first()
    subject_title = request.POST.get('type')
    subject = Subject.objects.filter(title__iexact=slugify(subject_title, allow_unicode=True).replace("-", " ")).first()
    message_text = request.POST.get('text')
    if '@' in message_text:
        message_text = ""
    if 'dotcom' in message_text:
        message_text = ""
    if not receiver:
        return JsonResponse({'error': 'Receiver not found'}, status=404)
    if not subject:
        return JsonResponse({'error': 'Subject not found'}, status=404)

    message = Message.objects.create(
        sender=sender,
        receiver=receiver,
        subject=subject,
        message=message_text
    )
    print("***********")
    print(request.POST.get('type'), receiver.email ,message_text)
    print("***********")
    call_message(request.POST.get('type'), receiver.email ,message_text)

    return JsonResponse({'message': "Message sent successfully from : {{request.POST.get('type')}}"}, status=200)

def delete_message(request):
    sender = request.user
    message_id = request.POST.get('messageId')
    subject = Subject.objects.filter(title__iexact=slugify(message_id, allow_unicode=True).replace("-", " ")).first()
    
    if not subject:
        return JsonResponse({'error': 'Subject not found'}, status=404)

    messages_deleted = Message.objects.filter((Q(sender=request.user) | Q(receiver=request.user)) & Q(subject=subject)).delete()
    return JsonResponse({'message': f'{messages_deleted} Message(s) deleted successfully'}, status=200)


@login_required
def message_alert_notification(request):
    if request.method == 'GET':
        count = Message.objects.filter(receiver=request.user, is_read=False).count()
        return JsonResponse({'count': count}, status=200)
    else:
        return JsonResponse({'error': 'Invalid method'}, status=400)
    
@login_required
def profile_user_image(request):
    if request.method == 'GET':
        user_profile = Userprofile.objects.filter(user=request.user).first()
        if user_profile:
            user_data = {
                'username': request.user.username,
                'email': request.user.email,
                'profile_image': user_profile.image.url if user_profile.image else None
            }
            return JsonResponse({'user': user_data}, status=200)
        else:
            return JsonResponse({'error': 'User profile not found'}, status=404)
    else:
        return JsonResponse({'error': 'Invalid method'}, status=400)
    

class TitleURLViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Latest_Articles.objects.all()
        serializer = LatestArticlesSerializer(queryset, many=True)
        return Response(serializer.data)
    