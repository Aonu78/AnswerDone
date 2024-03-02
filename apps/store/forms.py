from django import forms
from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = ('user','title','category', 'course','institute',
                  'isbn', 'author','edition','description',
                  'show_pages', 'price', 'image','file')
        