from django.contrib import admin
from .models import Category, Product, Institute,Courses, Bundle

class ProductAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'course','status', 'user','price')

admin.site.register(Category)
admin.site.register(Product,ProductAdmin)
admin.site.register(Institute)
admin.site.register(Courses)
admin.site.register(Bundle)