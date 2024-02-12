
from django.urls import path
from graphics.api.views import graphics, filetypes, categories, users, filetype, category, graphic, user


urlpatterns = [
    path("graphics/", graphics, name="index-api"),
    path("graphic/<int:pk>/", graphic, name="graphic-api"),
    path("filetypes/", filetypes, name="filetypes-api"),
    path("filetype/<int:pk>/", filetype, name="filetype-api"),
    path("categories/", categories, name="categories-api"),
    path("category/<int:pk>/", category, name="category-api"),
     path("users/", users, name="users-api"),
    path("user/<int:pk>/", user, name="user-api"),
]
