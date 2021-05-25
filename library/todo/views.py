from rest_framework.generics import ListCreateAPIView
from rest_framework.viewsets import ModelViewSet
from todo.serializers import TodoSerializer, ProjectSerializer
from todo.models import Project, Todo
from rest_framework.permissions import AllowAny
from rest_framework.pagination import *
from todo.filters import ProjectNameFilter

class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [AllowAny]
    pagination_class = ProjectLimitOffsetPagination
    filterset_class = ProjectNameFilter

class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    permission_classes = [AllowAny]
    pagination_class = TodoLimitOffsetPagination
    filterset_fields = ['project']


