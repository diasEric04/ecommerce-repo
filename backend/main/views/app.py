from django.shortcuts import render

def index(request):
    context = {
        'page_title': ' - Index'
    }
    return render(request, 'main/pages/index.html', context)