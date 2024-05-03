from django.template import loader
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView

def catalog(request):
     template = loader.get_template('landingPage.html')
     return HttpResponse(template.render())


def about(request):
     template = loader.get_template('About.html')
     return HttpResponse(template.render())

def contact(request):
     template = loader.get_template('ContactUs.html')
     return HttpResponse(template.render())



def signup(request):
     template = loader.get_template('ContactUs.html')
     return HttpResponse(template.render())


def login(request):
     template = loader.get_template('ContactUs.html')
     return HttpResponse(template.render())


def logout(request):
     template = loader.get_template('ContactUs.html')
     return HttpResponse(template.render())



