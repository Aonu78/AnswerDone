from django.db import models
from django.contrib.auth.models import User
from ..store.models import Category, Product
from django.urls import reverse

class ChargePrice(models.Model):
    charge_percentage = models.FloatField(null=True)

    class Meta:
        verbose_name_plural = "ChargePrice"

    def __str__(self):
        return str(self.charge_percentage)
    
class ServiceCosts(models.Model):
    service_costs = models.FloatField(default=0.0)

    class Meta:
        verbose_name_plural = "ServiceCosts"

    def __str__(self):
        return str(self.service_costs)
    

class Withdraw_Type(models.Model):
    withdraw_type = models.CharField(max_length=255,null=True)

    class Meta:
        verbose_name_plural = "withdraw_type"

    def __str__(self):
        return str(self.withdraw_type)
    


STATUS_CHOICES = (
    ('Pending', 'Pending'),
    ('Waiting', 'Waiting'),
    ('Approved', 'Approved'),
    ('Failed', 'Failed'),
)
class Withdraw_Request(models.Model):

    user = models.ForeignKey(User, related_name='Withdraw_Request', on_delete=models.SET_NULL, null=True , blank=True)
    username = models.CharField(max_length=255,null=True)
    email = models.CharField(max_length=255,null=True)
    acc_type = models.CharField(max_length=255,null=True)
    amount_withdraw = models.CharField(max_length=255,null=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Pending')


STATUS_CHOICES = (
    ('Pending', 'Pending'),
    ('Waiting', 'Waiting'),
    ('Approved', 'Approved'),
    ('Failed', 'Failed'),
)
class Copyright_Request(models.Model):
    username = models.CharField(max_length=512,null=True)
    email = models.CharField(max_length=512,null=True)
    url = models.CharField(max_length=512,null=True)
    description = models.TextField(null=True)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Pending')


STATUS_CHOICES = (
    ('Pending', 'Pending'),
    ('Active', 'Active')
)

class Question_Answer(models.Model):
    user = models.ForeignKey(User, related_name='product', on_delete=models.SET_NULL, null=True , blank=True, default=None)
    product = models.ForeignKey(Product, related_name='product', on_delete=models.SET_NULL, null=True , blank=True, default=None)
    title = models.CharField(max_length=255,default=None, null=True , blank=True,)
    question_type = models.CharField(max_length=50,default=None)
    chapter_no = models.IntegerField(default=0, null=True, blank=True)
    question_no = models.IntegerField(default=0)
    question = models.TextField(default=None)
    short_answer = models.TextField(default=None)
    answer = models.TextField(default=None)
    like = models.IntegerField(default=0)
    price = models.FloatField(null=True, blank=True)
    views = models.IntegerField(default=0, null=True, blank=True)
    purchased = models.IntegerField(default=0, null=True, blank=True)
    dislike = models.IntegerField(default=0)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='Active')
    slug = models.CharField(max_length=255,default=None, null=True , blank=True,)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
    
            
    def get_absolute_url(self):
        return reverse('question_detail', args=[str(self.product.category.slug),str(self.slug)])

    def get_absolute_purchased_url(self):
        return reverse('purchased_product', args=[str(self.product.category.slug),str(self.slug)])
