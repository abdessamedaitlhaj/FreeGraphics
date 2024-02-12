
from django.http import HttpResponse, JsonResponse
from django.urls import include, path

from graphics.models import Graphic


def get_graphics(request):
    
    graphics = Graphic.objects.all()
    print(graphics)
    data = {"data": list(graphics.values())}
    return JsonResponse(data)

urlpatterns = [
    path("graphics/", get_graphics),
    path("apirest/", include("graphics.api.urls")),

]