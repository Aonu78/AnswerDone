import os
import logging
from PyPDF2 import PdfReader, PdfWriter
from django.db import models
from model_utils import Choices
from django.urls import reverse
from django.contrib.auth.models import User
from django.conf import settings
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver
from django.utils.text import slugify
import unicodedata 

    
class Category(models.Model):
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = "Categories"

    def __str__(self):
        return self.title

class Institute(models.Model):
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = "Institutes"

    def __str__(self):
        return self.title
    
class Courses(models.Model):
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    class Meta:
        verbose_name_plural = "Course"

    def __str__(self):
        return self.title
    
# DRAFT = 'Draft'
# WATING_APPROVAL = 'Wating Approval'
# ACTIVE = 'Active'
# DELETED = 'Deleted'
STATUS_CHOICES = (
('DRAFT', 'Draft'),
('WATING_APPROVAL', 'Wating Approval'),
('ACTIVE', 'Active'),
('DELETED', 'Deleted'),
)
class Product(models.Model):
    
    user = models.ForeignKey(User, related_name='products', on_delete=models.CASCADE)
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE,blank=True, null=True)
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=255, unique=True, null=True)
    course = models.ForeignKey(Courses, related_name='products', on_delete=models.CASCADE, default=None,blank=True, null=True)
    institute = models.ForeignKey(Institute, related_name='products', on_delete=models.CASCADE, blank=True, null=True)
    book = models.CharField(max_length=255, blank=True, null=True)
    isbn = models.CharField(max_length=255, blank=True, null=True)
    author = models.CharField(max_length=255, blank=True, null=True)
    edition = models.CharField(max_length=255, blank=True, null=True)
    publisher = models.CharField(max_length=255, blank=True, null=True, default=None)
    description = models.TextField(blank=True)
    price = models.FloatField()
    image = models.ImageField(upload_to='uploads/product_images/', blank=True, null=True)
    file = models.FileField(upload_to='uploads/product_files/', blank=True, null=True)
    show_pages = models.IntegerField(default=3)
    purchased = models.IntegerField(default=0)
    dummy_file = models.FileField(upload_to='uploads/dummy_product_files/', blank=True, null=True)
    num_pages = models.IntegerField(blank=True, null=True)
    views = models.IntegerField(default=0)
    average_rating = models.DecimalField(max_digits=3, decimal_places=2, default=0.00)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES, default='ACTIVE')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
        
    def get_absolute_url(self):
        return reverse('product_detail', args=[str(self.category.slug),str(self.slug)])


@receiver(post_save, sender=Product)
def generate_dummy_file(sender, instance, created, **kwargs):
    if not kwargs.get('update_fields'):  # Check if the signal is not triggered by update_fields
        if created and instance.file:
            file_path = instance.file.path
            if os.path.exists(file_path):
                try:
                    with open(file_path, 'rb') as file:
                        pdf_reader = PdfReader(file)
                        print('pdf_reader = PdfReader(file)')
                        num_pages = len(pdf_reader.pages)
                        print('num_pages = len(pdf_reader.pages)')
                        if instance.show_pages > 0 and instance.show_pages <= num_pages:
                            pdf_writer = PdfWriter()
                            for page_num in range(instance.show_pages):
                                pdf_writer.add_page(pdf_reader.pages[page_num])
                                print('pdf_writer.add_page(pdf_reader.pages[page_num])')
                            # Generate a unique dummy file name
                            dummy_file_name = f"{instance.id}_dummy.pdf"
                            print(dummy_file_name)
                            dummy_file_path = os.path.join(settings.MEDIA_ROOT, dummy_file_name)
                            print(dummy_file_path)
                            with open(dummy_file_path, 'wb') as dummy_file:
                                pdf_writer.write(dummy_file)
                                print('pdf_writer')
                            instance.dummy_file.name = os.path.relpath(dummy_file_path, settings.MEDIA_ROOT)
                            instance.num_pages = num_pages
                            instance.slug = slugify(instance.title)
                            instance.save(update_fields=['dummy_file', 'num_pages', 'slug'])
                        else:
                            logging.error(f"Invalid number of pages to show: {instance.show_pages}")
                except FileNotFoundError:
                    logging.error(f"File not found at path: {file_path}")
                except Exception as e:
                    logging.error(f"Error occurred while processing PDF: {e}")
            else:
                logging.error(f"File not found at path: {file_path}")
        else:
            try:
                instance.slug = slugify(instance.title)
                instance.save(update_fields=['slug'])
                logging.error(f"File Not Exist..")
            except:
                logging.error(f"File Not Exist..")

@receiver(pre_save, sender=Product)
def update_dummy_file_on_file_change(sender, instance, **kwargs):
    try:
        existing_instance = sender.objects.get(pk=instance.pk)
    except sender.DoesNotExist:
        return

    if existing_instance.file != instance.file and instance.file:
        file_path = instance.file.path
        print(file_path)
        filenamepath = instance.file.name.replace(" ", "_").replace("'", "").replace("+", "")
        file_path = os.path.join(settings.MEDIA_ROOT, 'uploads', 'product_files', filenamepath)
        print(file_path)
        
        if os.path.exists(file_path):
            try:
                with open(file_path, 'rb') as file:
                    pdf_reader = PdfReader(file)
                    num_pages = len(pdf_reader.pages)
                    print("Reading Done")
                    if instance.show_pages > 0 and instance.show_pages <= num_pages:
                        pdf_writer = PdfWriter()
                        print("Writer Create")
                        dummy_file_name = f"{instance.id}_dummy.pdf"
                        print(dummy_file_name)
                        dummy_file_path = os.path.join(settings.MEDIA_ROOT, dummy_file_name)
                        for page_num in range(instance.show_pages):
                            pdf_writer.add_page(pdf_reader.pages[page_num])
                            print("Writing")
                        print("Writing DOne")
                        dummy_file_path = os.path.join(settings.MEDIA_ROOT, dummy_file_name)

                        # dummy_file_path = os.path.join(settings.MEDIA_ROOT, 'uploads', 'dummy_product_files', f'{instance.id}_dummy.pdf')
                        print(dummy_file_path)
                        with open(dummy_file_path, 'wb') as dummy_file:
                            pdf_writer.write(dummy_file)
                            print("Wringin...")
                        print("Finish")
                        instance.dummy_file.name = os.path.relpath(dummy_file_path, settings.MEDIA_ROOT)
                        instance.num_pages = num_pages
                        instance.slug = slugify(instance.title)
                        instance.save(update_fields=['dummy_file', 'num_pages', 'slug'])
                        print("Finish Full")
                    else:
                        logging.error(f"Invalid number of pages to show: {instance.show_pages}")
            except Exception as e:
                logging.error(f"Error occurred while processing PDF: {e}")
        else:
            logging.error(f"File not found at path: {file_path}")


