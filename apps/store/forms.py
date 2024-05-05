from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('user','title','category', 'course','institute',
                  'description',
                  'show_pages', 'price', 'image','file')
        
        labels = {
            'user': 'User',  # Change 'User' to whatever you want
            'title': 'Title',
            'category': 'Subject',
            'course': 'Course',
            'institute': 'Institute',
            'description': 'Description',
            'show_pages': 'Show Pages',
            'price': 'Price',
            'image': 'Image',
            'file': 'File',
        }