from django.shortcuts import render
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import auth
from ..forms import RegisterForm


def signin(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)

        if form.is_valid():
            form.save()
        context = {
            'form': form
        }
        return render(
            request,
            'api/forms/crud.html',
            context
        )
    context = {
        'form': RegisterForm()
    }
    return render(
        request,
        'api/forms/crud.html',
        context
    )


def signup(request):
    form = AuthenticationForm(request)
    if request.method == 'POST':
        form = AuthenticationForm(request, request.POST)
        if form.is_valid():
            user = form.get_user()
            auth.login(request, user)

    context = {
        'form': form
    }
    return render(
        request,
        'api/forms/crud.html',
        context
    )
