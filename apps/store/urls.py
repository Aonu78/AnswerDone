from django.conf import settings
from django.conf.urls.static import static
from django.urls import path
from django.contrib.auth import views as auth_view
from . import views
urlpatterns = [
    path('search',views.search, name='search'), #done
    
    path('qna/search',views.qna, name='qna'),
    path('qna/',views.qna, name='qna'), 

    path('qna/<int:pk>/like/', views.like_qna, name='like_qna'),
    path('qna/<int:pk>/dislike/', views.dislike_qna, name='dislike_qna'),
    path('question/<slug:category_slug>/<slug:slug>/',views.question_detail, name='question_detail'), #done
    path('purchased/question/<slug:category_slug>/<slug:slug>/',views.question_purchased, name='question_purchased'), #done

    path('book/<slug:slug>/',views.category_detail, name='category_detail'), #done
    path('school/<slug:slug>/',views.school_detail, name='school_detail'), #done
    path('bundle/detail/<slug:slug>/',views.bundle_detail, name='bundle_detail'), #done
    path('detail/<slug:category_slug>/<slug:slug>/',views.product_detail, name='product_detail'), #done
    path('purchased/detail/<slug:category_slug>/<slug:slug>/',views.purchased_product, name='purchased_product'),#done
    
    path('rate-product/<int:product_id>/', views.rate_product, name='rate_product'),
    path('rate-answer/<int:product_id>/', views.rate_answer, name='answer'),

    path('add-to-purchased/<str:product_type>/<int:product_id>/',views.add_to_purchased, name='add-to-purchased'), #done
    path('add-to-cart/<str:product_type>/<int:product_id>/',views.add_to_cart, name='add-to-cart'), #done
    path('remove-from-cart/<str:product_type>/<int:product_id>/',views.remove_from_cart, name='remove_from_cart'), #done
    
    path('dashboard/', views.dashboard, name='dashboard'), #done
    path('user/courses/', views.courses, name='courses'), #skip
    path('user/uploads/', views.uploads, name='uploads'), #done
    path('uploads/', views.user_uploads, name='user_uploads'), #done
    path('bundles/', views.bundles, name='bundles'), #done
    path('create-bundle/', views.create_bundle, name='create_bundle'), #done
    path('bundle/remove/<int:product_id>/', views.remove_bundle, name='remove_bundle'), #done
    path('user/product/edit/<int:pk>', views.Edit_uploads, name='edit_product'), #done
    path('user/product/delete/<int:pk>', views.delete_uploads, name='delete_uploads'),#done
    path('user/add-institute/', views.add_institute, name='add-institute'), #done
    path('user/add-course/', views.add_course, name='add_course'), #done
    path('user/add-category/', views.add_category, name='add_category'), #done
    path('downloads/', views.downloads, name='downloads'), #done
    path('user/wallet/', views.wallet, name='wallet'), #done
    path('user/reviews/', views.reviews, name='reviews'),
    path('messages/', views.messages, name='messages'),
    path('user/wishlist/', views.wishlist, name='wishlist'),#skip
    path('user/profile/', views.profile, name='profile'), #done
    path('user/profile/<str:id>/', views.user_profile, name='user_profile'), #done
    path('profile_pic/edit/', views.settings_profile, name='settings_profile'), #done
    path('settings/edit/', views.settings_profile, name='settings_edit'), #done

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)