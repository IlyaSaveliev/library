from django.db import models
from users.models import User

class Project(models.Model):
    name = models.CharField(max_length=128)
    description = models.CharField(max_length=512)
    links = models.URLField(blank=True, null=True)
    users = models.ManyToManyField(User, related_name='users', blank=True)

    def __str__(self):
        return f'{self.name}'


class Todo(models.Model):
    status = models.BooleanField(default=True)
    created_ad = models.DateTimeField(auto_now_add=True)
    updated_ad = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey(User, related_name='todos', on_delete=models.SET_NULL, null=True)
    description = models.CharField(max_length=512)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='todos')  # One to Many ?