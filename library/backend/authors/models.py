from django.db import models


class Author(models.Model):
    first_name = models.CharField(verbose_name='имя', max_length=64)
    last_name = models.CharField(verbose_name='фамилия', max_length=64)
    birthday_year = models.PositiveIntegerField(verbose_name='год рождения')

    def __str__(self):
        return f'{self.first_name}{self.last_name}'

