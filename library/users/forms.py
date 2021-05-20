from django.contrib.auth.forms import UserCreationForm,UserChangeForm
from users.models import User


class UserCreateForm(UserCreationForm):

    class Meta:
        model = User
        fields = '__all__'


class UserChangeForm(UserChangeForm):

    class Meta:
        model = User
        ields = '__all__'
