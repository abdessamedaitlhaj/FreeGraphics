from rest_framework import serializers
from graphics.models import Category, FileType, Graphic
from django.contrib.auth.models import User



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')


class GraphicSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Graphic
        fields = '__all__'
        
    def validate(self, data):
        if data['title'] == '':
            raise serializers.ValidationError("Title is required")
        if data['category'] == '':
            raise serializers.ValidationError("Category is required")
    def validate_is_free(self, value):
        if not value:
            raise serializers.ValidationError("This graphic is not free")
        return value

class CategorySerializer(serializers.ModelSerializer):
    graphics = GraphicSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = '__all__'

class FileTypeSerializer(serializers.ModelSerializer):
    graphics = GraphicSerializer(many=True, read_only=True)

    class Meta:
        model = FileType
        fields = '__all__'
# class GraphicSerializer(serializers.Serializer):
#     id = serializers.IntegerField(read_only=True)
#     title = serializers.CharField(max_length=255)
#     category = serializers.CharField(max_length=255)
#     file_type = serializers.CharField(max_length=255)
#     license = serializers.CharField(max_length=255)
#     is_free = serializers.BooleanField(default=True)
#     file_url = serializers.URLField()
#     image = serializers.URLField()
    
#     def validate(self, data):
#         if data['title'] == '':
#             raise serializers.ValidationError("Title is required")
#         if data['category'] == '':
#             raise serializers.ValidationError("Category is required")
#     def validate_is_free(self, value):
#         if not value:
#             raise serializers.ValidationError("This graphic is not free")
#         return value
    
#     def create(self, validated_data):
#         return Graphic.objects.create(**validated_data)
    
#     def update(self, instance, validated_data):
#         instance.title = validated_data.get('title', instance.title)
#         instance.category = validated_data.get('category', instance.category)
#         instance.file_type = validated_data.get('file_type', instance.file_type)
#         instance.license = validated_data.get('license', instance.license)
#         instance.is_free = validated_data.get('is_free', instance.is_free)
#         instance.file_url = validated_data.get('file_url', instance.file_url)
#         instance.image = validated_data.get('image', instance.image)
#         instance.save()
#         return instance