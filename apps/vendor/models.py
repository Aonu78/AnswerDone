from django.contrib.auth.models import User
from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from django.db import models
from ..store.models import Product
from ..core.models import Question_Answer
from model_utils import Choices


STATUS_CHOICES = (
('SCHOOL_STUDENT', 'School Student'),
('COLLEGE_UNIVERSITY', 'College Or University Student'),
('COURSE_PARTICIPANT', 'Course Participant'),
('TUTOR', 'Tutor'),
('PUBLISHER', 'Publisher'),
)    

class Userprofile(models.Model):
    user = models.ForeignKey(User, verbose_name="User", on_delete=models.CASCADE)
    firstname = models.CharField(max_length=150, verbose_name="first_name", blank=True)
    lastname = models.CharField(max_length=150, verbose_name="last_name", blank=True)
    dob = models.DateField(verbose_name="dob", blank=True, null=True, default='2000-01-01')
    image = models.ImageField(upload_to='uploads/profile/', blank=True)
    usertype = models.CharField(max_length=50, choices=STATUS_CHOICES, default='TUTOR')
    Address = models.CharField(max_length=150, verbose_name="Address",blank=True)
    city = models.CharField(max_length=150, verbose_name="City",blank=True)
    zipcode = models.CharField(max_length=150, verbose_name="Zip_Code",blank=True)
    state = models.CharField(max_length=150, verbose_name="State",blank=True)
    country = models.CharField(max_length=150, verbose_name="country",blank=True)
    institution = models.CharField(max_length=150, verbose_name="institution",blank=True)
    education = models.CharField(max_length=150, verbose_name="education",blank=True)
    academicyear   = models.CharField(max_length=150, verbose_name="academic_year",blank=True)
    shoptitle = models.CharField(max_length=150, verbose_name="shop_title", blank=True)
    shopdescription = models.TextField(blank=True, verbose_name="shop_description")
    
    def __str__(self):
        return str(self.user)


STATUS_CHOICES = (
    ('Pending', 'Pending'),
    ('Accepted', 'Accepted'),
    ('Packed', 'Packed'),
    ('On The Way', 'On The Way'),
    ('Delivered', 'Delivered'),
    ('Cancelled', 'Cancelled')
)

class Order(models.Model):
    first_name = models.CharField(max_length=255,null=True)
    last_name = models.CharField(max_length=255,null=True)
    address = models.CharField(max_length=255,null=True)
    zipcode = models.CharField(max_length=255,null=True)
    city = models.CharField(max_length=255,null=True)
    country = models.CharField(max_length=255,null=True)
    paid_amount = models.FloatField(blank=True, null=True)
    is_paid = models.BooleanField(default=False)
    tr_id = models.CharField(max_length=255,null=True)
    tr_name = models.CharField(max_length=255,null=True)
    tr_email = models.CharField(max_length=255,null=True)
    tr_payer_id = models.CharField(max_length=255,null=True)
    tr_payid = models.CharField(max_length=255,null=True)
    tr_merchant_id = models.CharField(max_length=255,null=True)
    created_by = models.ForeignKey(User, related_name='orders', on_delete=models.SET_NULL, blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True,null=True)

    def __str__(self):
        return str(self.created_by)

class OrderItem(models.Model):
    order = models.ForeignKey(Order, related_name='order_items', on_delete=models.CASCADE)
    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey('content_type', 'object_id')
    price = models.FloatField()
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return str(self.content_object)
    

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    description = models.TextField(null=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
    created_at = models.DateTimeField(auto_now_add=True,null=True)

class Rating_QA(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    description = models.TextField(null=True)
    question = models.ForeignKey(Question_Answer, on_delete=models.CASCADE)
    rating = models.IntegerField(choices=[(i, i) for i in range(1, 6)])
