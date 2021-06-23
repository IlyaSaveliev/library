from rest_framework.permissions import AllowAny
from rest_framework.viewsets import ModelViewSet
from users.models import User
from users.serializers import UserModelSerializer, UserModelSerializerV2


# class UserViewSet(viewsets.GenericViewSet, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.UpdateModelMixin):
#     queryset = User.objects.all()
#     serializer_class = UserModelSerializer
#     pagination_class = LimitOffsetPagination
#     renderer_classes = [JSONRenderer, BrowsableAPIRenderer]

class UserViewSet(ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserModelSerializer
    # permission_classes = [permissions.IsAuthenticated]
    permission_classes = [AllowAny]

    def get_serializer_class(self):
        if self.request.version == '0.2':
            return UserModelSerializerV2
        return UserModelSerializer