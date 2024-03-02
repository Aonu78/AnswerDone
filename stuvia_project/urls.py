
from django.contrib import admin
from django.urls import path, include
from django.conf import settings  
from django.conf.urls.static import static 

admin.site.site_header = 'AnswerDone Dashboard'                    # default: "Django Administration"
admin.site.index_title = 'AnswerDone Admin Site'                 # default: "Site administration"
admin.site.site_title = 'AnswerDone admin Dashboard' # default: "Django site admin"

urlpatterns = [
    path('', include('apps.store.urls')),
    path('',include('apps.core.urls')),
    path('',include('apps.vendor.urls')),
    path('admin/', admin.site.urls),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
