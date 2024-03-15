from rest_framework import serializers
from django.contrib.auth.models import User
from ..store.models import Bundle

class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username']


class BundleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bundle
        fields = ['title', 'description', 'price', 'product', 'slug','created_by']