from rest_framework.viewsets import ModelViewSet
from todo.serializers import TodoSerializer, ProjectSerializer, ProjectSerializerBase
from todo.models import Project, Todo
from rest_framework.pagination import *


class ProjectLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 10

class TodoLimitOffsetPagination(LimitOffsetPagination):
    default_limit = 20

class ProjectViewSet(ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    # permission_classes = [permissions.IsAuthenticated]
    # pagination_class = ProjectLimitOffsetPagination
    # filterset_class = ProjectNameFilter

    def get_serializer_class(self):
        if self.request.method in ['GET']:
            return ProjectSerializer
        return ProjectSerializerBase

class TodoViewSet(ModelViewSet):
    queryset = Todo.objects.all()
    serializer_class = TodoSerializer
    # permission_classes = [permissions.IsAuthenticated]
    # pagination_class = TodoLimitOffsetPagination

    # def destroy(self, request, pk=None):
    #     queryset = Todo.objects.all()
    #     todo = get_object_or_404(queryset, pk=pk)
    #     todo.done = True
    #     todo.save()
    #     serializer = TodoSerializer(todo)
    #     return Response(serializer.data)

