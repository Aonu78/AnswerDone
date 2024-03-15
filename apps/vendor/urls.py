from django.urls import path
from django.conf import settings  
from django.conf.urls.static import static 
from django.contrib.auth import views as auth_view
from .forms import PasswordChangeForm,SetPasswordForm
from django.contrib.auth.views import LoginView as BaseLoginView
from .api import UserUpdateView, get_suggestions, get_search_result_count, get_institution_dropdown_content,settings_edit,create_bundle
from . import views
from django.http import HttpResponseRedirect

class CustomLoginView(BaseLoginView):
    def form_valid(self, form):
        next_url = self.request.GET.get('next', '/user/dashboard/')
        return HttpResponseRedirect(next_url)
    
urlpatterns = [
    path('accounts/register/', views.RegistrationView.as_view(), name='register'), #doen
    path('accounts/login/', views.LoginView.as_view(), name='login'), #done
    path('login/', views.LoginView.as_view(), name='login_main'), #done
    path('accounts/logout/', auth_view.LogoutView.as_view(), name='logout'), #done
    # path('accounts/forgot-password/', views.forgot_password, name='forgot_password'),
    path('accounts/password-reset/',views.RequestEmailReset.as_view(), name="forgot_password"), #done
    path('accounts/password-change/', auth_view.PasswordChangeView.as_view(template_name='registration/password-change.html', form_class=PasswordChangeForm, success_url='/user/password-change-done/'), name="password-change"), #done
    path('user/password-change-done/', auth_view.PasswordChangeDoneView.as_view(template_name='registration/password_change_done.html'), name="password-change-done"), #done
    path('api/users/<int:pk>/update-username/', UserUpdateView.as_view(), name='user-update'), #done

    path('ajax-get-suggestions-searchbar/', get_suggestions, name='get_suggestions'),
    path('ajax-get-search-result-count/', get_search_result_count, name='get_search_result_count'),
    path('ajax-get-institution-dropdown-content/', get_institution_dropdown_content, name='get_institution_dropdown_content'),
    path('ajax-mvc/create-bundle-action/', create_bundle, name='create-bundle-action'),
    # path('settings/edit/', settings_edit, name='settings_edit'),

    path('activate/<slug:uidb64>/<slug:token>',views.ActivateAccount.as_view(),name='activate'), #done
    path('accounts/password-reset-confirm/<uidb64>/<token>/', auth_view.PasswordResetConfirmView.as_view(template_name='password_reset_confirm.html', form_class=SetPasswordForm, success_url='/accounts/password-reset-complete/'), name="password_reset_confirm"), # Passing Success URL to Override default URL
    path('accounts/password-reset-complete/', auth_view.PasswordResetCompleteView.as_view(template_name='password_reset_complete.html'), name="password_reset_complete"), #done

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)