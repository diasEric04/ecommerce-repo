from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import auth
from ..forms import RegisterForm


def signin(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
    return render(
        request,
        'api/form/form-token.html'
    )


def signup(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            auth.login(request, user)
    return render(
        request,
        'api/form/form-token.html'
    )
