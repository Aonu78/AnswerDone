from django.contrib import admin
from .models import Category, Product, Institute,Courses, Bundle
# , Message

class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'course','status', 'user','price']

class BundleAdmin(admin.ModelAdmin):
    list_display = ['title', 'get_products', 'price', 'views', 'purchased', 'created_by']

    def get_products(self, obj):
        return ', '.join([product.title for product in obj.product.all()])

    get_products.short_description = 'Products'

admin.site.register(Category)
admin.site.register(Product,ProductAdmin)
admin.site.register(Institute)
admin.site.register(Courses)
admin.site.register(Bundle,BundleAdmin)
