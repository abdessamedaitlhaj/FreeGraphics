from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.http import JsonResponse
from graphics.models import Category, FileType, Graphic
from graphics.api.serializers import CategorySerializer, FileTypeSerializer, GraphicSerializer, UserSerializer
from django.contrib.auth.models import User


@api_view(["GET", "POST"])
def graphics(request):
    
    if request.method == 'GET':
        graphics = Graphic.objects.all()
        serialize = GraphicSerializer(graphics, many=True)
        return Response(serialize.data)
    
    if request.method == 'POST':
        serializer = GraphicSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(["GET", "PUT", "DELETE"])
def graphic(request, pk):
    
    
    if request.method == 'GET':
        graphic = Graphic.objects.get(pk=pk)
        serialize = GraphicSerializer(graphic)
        return Response(serialize.data)
    
    if request.method == 'PUT':
        graphic = Graphic.objects.get(pk=pk)
        serializer = GraphicSerializer(graphic, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    if request.method == 'DELETE':
        graphic = Graphic.objects.get(pk=pk)
        graphic.delete()
        return Response(status=204)
    

@api_view(["GET", "POST"])
def filetypes(request):
    
    if request.method == 'GET':
        filetypes = FileType.objects.all()
        serialize = FileTypeSerializer(filetypes, many=True)
        return Response(serialize.data)
    
    if request.method == 'POST':
        serializer = FileTypeSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(["GET", "PUT", "DELETE"])
def filetype(request, pk):
    
    
    if request.method == 'GET':
        filetype = FileType.objects.get(pk=pk)
        serialize = FileTypeSerializer(filetype)
        return Response(serialize.data)
    
    if request.method == 'PUT':
        filetype = FileType.objects.get(pk=pk)
        serializer = FileTypeSerializer(filetype, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    if request.method == 'DELETE':
        filetype = FileType.objects.get(pk=pk)
        filetype.delete()
        return Response(status=204)
    
@api_view(["GET", "POST"])
def categories(request):
    
    if request.method == 'GET':
        categories = Category.objects.all()
        serialize = CategorySerializer(categories, many=True)
        return Response(serialize.data)
    
    if request.method == 'POST':
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(["GET", "PUT", "DELETE"])
def category(request, pk):
    
    
    if request.method == 'GET':
        category = Category.objects.get(pk=pk)
        serialize = CategorySerializer(category)
        return Response(serialize.data)
    
    if request.method == 'PUT':
        category = Category.objects.get(pk=pk)
        serializer = CategorySerializer(category, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    if request.method == 'DELETE':
        category = Category.objects.get(pk=pk)
        category.delete()
        return Response(status=204)


@api_view(["GET", "POST"])
def users(request):
    
    if request.method == 'GET':
        users = User.objects.all()
        serialize = UserSerializer(users, many=True)
        return Response(serialize.data)
    
    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

@api_view(["GET", "PUT", "DELETE"])
def user(request, pk):
    
    
    if request.method == 'GET':
        user = User.objects.get(pk=pk)
        serialize = UserSerializer(user)
        return Response(serialize.data)
    
    if request.method == 'PUT':
        user = User.objects.get(pk=pk)
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    
    if request.method == 'DELETE':
        user = User.objects.get(pk=pk)
        user.delete()
        return Response(status=204)


