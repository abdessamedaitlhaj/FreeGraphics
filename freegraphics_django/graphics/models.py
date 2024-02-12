from django.db import models
from django.contrib.auth.models import User

class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self) -> str:
        return f"{self.name}"


class FileType(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.name}"


class License(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self) -> str:
        return f"{self.name}"


class Graphic(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name="graphics")
    license = models.ForeignKey(License, on_delete=models.CASCADE)
    file_types = models.ManyToManyField(FileType, related_name="graphics")
    is_free = models.BooleanField(default=True)
    file_url = models.URLField()
    image = models.URLField()



class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    downloaded_graphics = models.ManyToManyField(Graphic, related_name='downloaded_by')
    favorite_graphics = models.ManyToManyField(Graphic, related_name='favorited_by')


class DownloadLimit(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    limit = models.IntegerField(default=1)


class DailyDownload(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField(auto_now_add=True)
    count = models.IntegerField(default=0)

    

