from todo.models import Project, Todo
from users.models import User
from rest_framework import serializers
from users.serializers import UserModelSerializer

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):
    users = UserModelSerializer(many=True)
    todos = TodoSerializer(many=True)

    class Meta:
        model = Project
        fields = '__all__'
        # fields = ['name', 'description', 'links']



