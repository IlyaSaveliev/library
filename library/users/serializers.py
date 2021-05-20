from rest_framework.serializers import HyperlinkedModelSerializer
from users.models import User
from django import forms


class UserModelSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        # fields = ('user_name', 'first_name', 'last_name', 'email')
        fields = '__all__'

    def create(self, validated_data):
        user = super().save()
        user.is_active = False
        user.save()
        return user

    # def create(self, validated_data):
    #     user = User.objects.create()
    #     user.save()
    #     return user
