from rest_framework.viewsets import ModelViewSet
from todo.serializers import TodoSerializer, ProjectSerializer
from todo.models import Project, Todo


class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer


class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer




