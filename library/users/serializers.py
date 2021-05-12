from rest_framework.serializers import HyperlinkedModelSerializer
from users.models import UserProfile

class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = UserProfile
        # fields = ('user_name', 'first_name', 'last_name', 'email')
        fields = '__all__'