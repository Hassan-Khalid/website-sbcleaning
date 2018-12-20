from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from sbwebapp import views
from sbcleaning import settings
urlpatterns = [
    path('contact_us/',views.contact_page,name= 'contact_us.html')

]+ static(settings.STATIC_URL,document_root=settings.STATICFILES_DIRS)
=======
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from sbwebapp import views
from sbcleaning import settings
urlpatterns = [
    path('contact_us/',views.contact_page,name= 'contact_us.html')

]+ static(settings.STATIC_URL,document_root=settings.STATICFILES_DIRS)
