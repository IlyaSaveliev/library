from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from authors.views import AuthorModelViewSet
from users.views import UserModelViewSet
from todo.views import ProjectViewSet, TodoViewSet

router = DefaultRouter()
# router.register('authors', AuthorModelViewSet)
router.register('users', UserModelViewSet)
router.register('project', ProjectViewSet)
router.register('todo', TodoViewSet)

urlpatterns = [
    # path('', name='main'),
    path('admin/', admin.site.urls),
    # path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls)),
]
