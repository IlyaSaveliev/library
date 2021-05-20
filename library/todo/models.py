from django.db import models
from users.models import User

class Project(models.Model):
    name = models.CharField(verbose_name='Название проекта', max_length=256)
    description = models.CharField(verbose_name='описание', max_length=512)
    links = models.URLField(verbose_name='Ссылка на репозиторий')
    users = models.ManyToManyField(User, verbose_name='работают над проектом')

class Todo(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    description = models.CharField(verbose_name='описание', max_length=512)
    create_data = models.DateTimeField(verbose_name='дата создания', auto_now_add=True)
    update_data = models.DateTimeField(verbose_name='обновлено', auto_now=True)
    create_user = models.ForeignKey(User, verbose_name='создано', on_delete=models.CASCADE)
    is_active = models.BooleanField(default=True)