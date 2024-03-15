from django.contrib import admin
from .models import Userprofile, OrderItem, Order,Rating, Rating_QA

class RatingAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'description','rating')

class RatingQAAdmin(admin.ModelAdmin):
    list_display = ('user', 'question', 'description','rating')

class Itemadmin(admin.ModelAdmin):
    list_display = ('order', 'content_type', 'content_object', 'price')

admin.site.register(Order)
admin.site.register(OrderItem,Itemadmin)
admin.site.register(Userprofile)
admin.site.register(Rating,RatingAdmin)
admin.site.register(Rating_QA,RatingQAAdmin)