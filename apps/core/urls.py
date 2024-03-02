from django.urls import path
from . import views
from django.views.generic.base import TemplateView
from django.contrib.sitemaps.views import sitemap
from .sitemaps import DynamicSitemap,StaticSitemap
from django.conf import settings  
from django.conf.urls.static import static 


sitemaps = {
    'static': StaticSitemap,
    'dynamic': DynamicSitemap,
}

urlpatterns = [

    path('',views.index,name='index'), # done
    path('admin/core/question_answer/add/',views.question_answer,name='question_answer'), # done
    path('question_answer/add/',views.question_answer_add,name='question_answer_add'), # done
    # path('contact/',views.conatactpage,name='contactpage'),#skip
    path('upload/image/', views.upload_image, name='upload_image'),

    path('checkout/',views.checkout,name='checkout'),
    path('sell-study-notes/',views.sell_study_notes, name='sell-study-notes'),
    path('all-school/',views.all_school, name='all-school'),
    path('delete_profile/',views.delete_profile, name='delete_profile'),
    path('terms-of-use/',views.termsofuse, name='termsofuse'),
    path('privacy-policy/',views.privacy_policy, name='privacy-policy'),
    path('about-us/',views.aboutus, name='aboutus'),
    path('copyright-claim/',views.copyright, name='copyright'),
    path('faq/',views.faq, name='faq'),
    path('robots.txt',TemplateView.as_view(template_name='core/robots.txt', content_type='text/plain')),

    path('sitemap.xml', sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
