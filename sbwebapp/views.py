<<<<<<< HEAD
from django.shortcuts import render

# Create your views here.


def main_page(request):
    return render(request,template_name='index.html')

def contact_page(request):
    return render(request,'contact_us.html')

def client_page(request):
    return render (request,'clients.html')

def team_page(request):
    return render (request,'team.html')
=======
from django.shortcuts import render

# Create your views here.


def main_page(request):
    return render(request,template_name='index.html')

def contact_page(request):
    return render(request,'contact_us.html')

def client_page(request):
    return render (request,'clients.html')

def team_page(request):
    return render (request,'team.html')
>>>>>>> deploying website
