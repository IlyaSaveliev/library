from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from authors.views import AuthorModelViewSet
from todo.views import ProjectViewSet, TodoViewSet
from users import views
from users.views import UserViewSet
from rest_framework.authtoken import views

router = DefaultRouter()
# router.register('authors', AuthorModelViewSet)
router.register('users', UserViewSet)
router.register('project', ProjectViewSet)
router.register('todo', TodoViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api-token-auth/', views.obtain_auth_token),
    path('api/', include(router.urls)),
    # path('viewsets/', include(router.urls))
]
