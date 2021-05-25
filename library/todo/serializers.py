from rest_framework.relations import PrimaryKeyRelatedField

from todo.models import Project, Todo
from users.models import User
from rest_framework import serializers
from users.serializers import UserModelSerializer
from rest_framework.renderers import JSONRenderer, HTMLFormRenderer

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


