from django.urls import path
from . import views

app_name = 'main'

urlpatterns = [
    path('', views.index, name="index"),
    path('signin/', views.index, name="signin"),
    path('signup/', views.index, name="signup"),
]
