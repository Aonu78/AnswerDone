from django.contrib import admin
from .models import Category, Product, Institute,Courses

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'course','status', 'user','price')

admin.site.register(Category)
admin.site.register(Product,ProductAdmin)
admin.site.register(Institute)
admin.site.register(Courses)