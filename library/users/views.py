from rest_framework.viewsets import ModelViewSet
from users.models import UserProfile
from users.serializers import UserModelSerializer


class UserModelViewSet(ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserModelSerializer
