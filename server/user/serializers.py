from rest_framework import serializers
from user.models import User


class UserSerializer(serializers.ModelSerializer):

    def create(self, validated_data):
        username = validated_data['username']
        password = validated_data['password']

        user = User(username=username, password=password)
        user.set_password(password)
        user.save()
        return user

    class Meta:
        model = User
        fields = ['username', 'password']
        extra_kwargs = {
            'password': {
                'write_only': True
            }
        }
