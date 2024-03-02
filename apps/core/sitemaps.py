from django.contrib.sitemaps import Sitemap
from ..vendor.models import Product
from django.urls import reverse

class DynamicSitemap(Sitemap):
    changefreq = "daily"
    priority = 0.9

    def items(self):
        return Product.objects.filter(status='ACTIVE')
    
    def lastmod(self, obj):
        return obj.updated_at
    
class StaticSitemap(Sitemap):
    changefreq = "weekly"
    priority = 0.8

    def items(self):
        return ['index','qna','sell-study-notes','all-school','termsofuse','privacy-policy','aboutus',
                'copyright','faq','dashboard','uploads','user_uploads','downloads','wallet',
                'profile','settings_profile','register','login','forgot_password','logout']  # Add other static page URLs here
    
    def location(self, item):
        return reverse(item)  # Assuming your static pages are defined in URLs with their names
