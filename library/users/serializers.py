from rest_framework import serializers
from users.models import User
from django import forms


class UserModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_name', 'first_name', 'last_name', 'email']
        # fields = '__all__'


    # def create(self, validated_data):
    #     user = User.objects.create()
    #     user.save()
    #     return user
