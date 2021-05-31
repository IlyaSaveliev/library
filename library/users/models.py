from django.db import models
from django.contrib.auth.models import AbstractBaseUser

class User(AbstractBaseUser):
    user_name = models.CharField(max_length=64, unique=True, verbose_name='никнейм пользователя')
    first_name = models.CharField(max_length=64, verbose_name='Имя пользователя')
    last_name = models.CharField(max_length=64, verbose_name='фамимлия пользователя')
    email = models.CharField(max_length=64, unique=True, verbose_name='почта')
    age = models.PositiveSmallIntegerField(verbose_name='возраст')

    def __str__(self):
        return f'{self.user_name}'

    USERNAME_FIELD = 'user_name'
