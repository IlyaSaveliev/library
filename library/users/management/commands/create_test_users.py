from django.core.management import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_superuser('test_superuser', 'testSU1@api.local', 'testpassword')
        User.objects.create_user('test_user1', 'test1@api.local', 'testpassword')
        User.objects.create_user('test_user2', 'test2@api.local', 'testpassword')
        User.objects.create_user('test_user3', 'test3@api.local', 'testpassword')
        User.objects.create_user('test_user4', 'test4@api.local', 'testpassword')