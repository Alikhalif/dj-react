# todoapp/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

# router = DefaultRouter()
# router.register(r'tasks', TaskViewSet)

urlpatterns = [
    path("todos", views.taskViewSet),
    path("todos/<int:pk>", views.task_crud)
]
