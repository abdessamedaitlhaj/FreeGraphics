from django.contrib import admin
from graphics.models import Category, FileType
from graphics.models import License
from graphics.models import Graphic


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )

@admin.register(FileType)
class FileTypeAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )

@admin.register(License)
class LicenseAdmin(admin.ModelAdmin):
    list_display = (
        "name",
    )

@admin.register(Graphic)
class GraphicAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "license",
        "image",
        "is_free",
        "category",
    )

# Register your models here.
