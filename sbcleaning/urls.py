<<<<<<< HEAD
"""sbcleaning URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
from sbwebapp import views
from sbcleaning import settings
urlpatterns = [
    path('admin/', admin.site.urls),
    path('sbcleaning/', include('sbwebapp.urls')),
    path('index/',views.main_page,name= 'index.html'),
    path('index/contact_us/',views.contact_page,name= 'contact_us.html'),
    path('index/clients/',views.client_page,name= 'clients.html'),
    path('index/team/',views.team_page,name= 'team.html')



]+ static(settings.STATIC_URL,document_root=settings.STATICFILES_DIRS)
=======
"""sbcleaning URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path,include
from sbwebapp import views
from sbcleaning import settings
urlpatterns = [
    path('admin/', admin.site.urls),
    path('sbcleaning/', include('sbwebapp.urls')),
    path('index/',views.main_page,name= 'index.html'),
    path('index/contact_us/',views.contact_page,name= 'contact_us.html'),
    path('index/clients/',views.client_page,name= 'clients.html'),
    path('index/team/',views.team_page,name= 'team.html')



]+ static(settings.STATIC_URL,document_root=settings.STATICFILES_DIRS)
>>>>>>> deploying website
