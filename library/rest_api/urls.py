from django.contrib import admin
from django.urls import path, include, re_path
from rest_framework import permissions
from rest_framework.routers import DefaultRouter
from authors.views import AuthorModelViewSet
from todo.views import ProjectViewSet, TodoViewSet
from users import views
from users.views import UserViewSet
from rest_framework.authtoken import views
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt


schema_view = get_schema_view(
    openapi.Info(
        title="REST API",
        default_version='0.1',
        description="Documentation to out project",
        contact=openapi.Contact(email="admin@db.local"),
        license=openapi.License(name="MIT License"),
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

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
    path('api/<str:version>/', include(router.urls)),
    # path('viewsets/', include(router.urls))

    path('swagger.json', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    path('graphql/', csrf_exempt(GraphQLView.as_view(graphiql=True))),
]
