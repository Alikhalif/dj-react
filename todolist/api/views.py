from django.shortcuts import render, get_object_or_404


# Create your views here.
# todoapp/views.py

from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .models import Task
from .taskSerializer import TaskSerializer

@api_view(["GET", "POST"] )
def taskViewSet(request):
    if request.method == "GET":
        queryset = Task.objects.all()
        serializer = TaskSerializer(queryset, many=True)
        return Response(serializer.data)

    elif request.method == "POST":
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(["GET", "PATCH", "PUT", "DELETE"])
def task_crud(request, pk):
    todo = get_object_or_404(Task, id=pk)

    print(todo)
    print(request.data)

    if request.method == 'GET':
        serializer = TaskSerializer(todo)
        return Response(serializer.data)
    
    elif request.method == 'DELETE':
        todo.delete()
        return Response(status= status.HTTP_204_NO_CONTENT)
    
    elif request.method == 'PATCH' or 'PUT':
        serializer = TaskSerializer(todo, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
