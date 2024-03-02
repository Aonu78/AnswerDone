from django.contrib import admin
from .models import ChargePrice, ServiceCosts, Withdraw_Type, Withdraw_Request,Copyright_Request,Question_Answer
# from ..store.models import Withdraw_Request
# Register your models here.

class WithdrawRequest(admin.ModelAdmin):
    list_display = ('user','username', 'email', 'acc_type', 'status', "amount_withdraw")

class CopyrightRequest(admin.ModelAdmin):
    list_display = ('username', 'email', 'status')

class ReqQ_n_A(admin.ModelAdmin):
    list_display = ('product','question', 'short_answer','user','question_type','question_no','user')

admin.site.register(ChargePrice)
admin.site.register(ServiceCosts)
admin.site.register(Withdraw_Type)
admin.site.register(Copyright_Request, CopyrightRequest)
admin.site.register(Withdraw_Request,WithdrawRequest)
admin.site.register(Question_Answer,ReqQ_n_A)