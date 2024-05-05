from rest_framework import serializers
from django.contrib.auth.models import User
from ..store.models import Bundle
from ..vendor.models import Message, Subject
from ..core.models import Latest_Articles
# ,  Message

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class BundleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bundle
        fields = ['title', 'description', 'price', 'product', 'slug','created_by']

        
class MessageSerializer(serializers.Serializer):
    receiver = serializers.CharField(max_length=100)
    subject = serializers.CharField(max_length=255)
    message = serializers.CharField()

    # def create(self, validated_data):
    #     sender = self.context['request'].user
    #     receiver_username = validated_data['receiver']
    #     receiver = User.objects.get(username=receiver_username)
    #     subject_title = validated_data['subject']
    #     message_text = validated_data['message']

    #     subject, _ = Subject.objects.get_or_create(title=subject_title)
    #     message = Message.objects.create(sender=sender, receiver=receiver, subject=subject, message=message_text)
    #     print("#######################")
    #     print(message)
    #     print("#######################")
    #     return message


class LatestArticlesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Latest_Articles
        fields = ['title', 'url']