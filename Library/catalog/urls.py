from django.urls import path
from . import views

urlpatterns = [
    path('', views.catalog, name='catalog'),
    path('about/', views.about, name='About'),
    path('contact/', views.contact, name='ContactUs'),

]
