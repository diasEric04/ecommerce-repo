from django.urls import path
from . import views

app_name = 'api'

urlpatterns = [
    path('form/signin/', views.signin, name='form-signin'),
    path('form/signup/', views.signup, name='form-signup'),
]
