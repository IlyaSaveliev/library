# from rest_framework.viewsets import ModelViewSet
from rest_framework.renderers import JSONRenderer, BrowsableAPIRenderer
from users.models import User
from users.serializers import UserModelSerializer
from rest_framework.pagination import *
from rest_framework import mixins, viewsets


class UserViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    pagination_class = LimitOffsetPagination
    renderer_classes = [JSONRenderer, BrowsableAPIRenderer]