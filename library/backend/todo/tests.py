from rest_framework import status
from rest_framework.test import APITestCase
from mixer.backend.django import mixer
from .models import Todo


class TestProjectViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/project/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class TestTodoViewSet(APITestCase):

    def test_get_list(self):
        response = self.client.get('/api/todo/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)


    def test_idet_mixer(self):
        todo = mixer.blend(Todo)
        response = self.client.put(f'/api/todo/{todo.id}/', {'status': 'True', 'description': 'Test Notes', 'owner': '', 'project': todo.project.id})
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        todo = Todo.objects.get(id=todo.id)
        self.assertEqual(todo.description, 'Test Notes')
