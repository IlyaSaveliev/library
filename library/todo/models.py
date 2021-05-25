from django.db import models
from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=512)
    links = models.URLField(blank=True, null=True)
    users = models.ManyToManyField(User, related_name='projects')




class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='todos')
    description = models.CharField(max_length=512)
    create_data = models.DateTimeField(auto_now_add=True)
    update_data = models.DateTimeField(auto_now=True)
    create_user = models.ForeignKey(User, related_name='todos', on_delete=models.SET_NULL, null=True)
    is_active = models.BooleanField(default=True)