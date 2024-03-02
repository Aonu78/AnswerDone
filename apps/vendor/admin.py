from django.contrib import admin
from .models import Userprofile, OrderItem, Order,Rating

class RatingAdmin(admin.ModelAdmin):
    list_display = ('user', 'product', 'description','rating')

admin.site.register(Order)
admin.site.register(OrderItem)
admin.site.register(Userprofile)
admin.site.register(Rating,RatingAdmin)