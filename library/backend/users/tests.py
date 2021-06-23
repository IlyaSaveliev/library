from django.test import TestCase
import json
from rest_framework import status
from rest_framework.test import APIRequestFactory, force_authenticate, APIClient, APITestCase
from django.contrib.auth.models import User
from .views import UserViewSet
from .models import User


class TestUser(TestCase):

    def test_get_list(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        view = UserViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_get_list_admin(self):
        factory = APIRequestFactory()
        request = factory.get('/api/users/')
        admin = User.objects.create_superuser('admin_test@db.local', 'test123456')
        force_authenticate(request, admin)
        view = UserViewSet.as_view({'get': 'list'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_user(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users/', {'username': 'test_user', 'firstname': 'test_user', 'lastname': 'test_user', 'email': 'test_user@db.local', 'password': 'test_user123'})
        view = UserViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_user_admin(self):
        factory = APIRequestFactory()
        request = factory.post('/api/users/', {'username': 'test_user', 'firstname': 'test_user', 'lastname': 'test_user', 'email': 'test_user@db.local', 'password': 'test_user123'}, format='json')
        admin = User.objects.create_superuser('admin_test@db.local', 'test123456')
        force_authenticate(request, admin)
        view = UserViewSet.as_view({'post': 'create'})
        response = view(request)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_user_detail(self):
        user = User.objects.create(username='test_user', firstname='test_user', lastname='test_user', email='test_user@db.local', password='test_user123')
        client = APIClient()
        response = client.get(f'/api/users/{user.id}/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

class TestProjectViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/users/')
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


