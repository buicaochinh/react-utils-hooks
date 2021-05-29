# Create your views here.
from rest_framework import status
from rest_framework.generics import GenericAPIView, CreateAPIView
from rest_framework.response import Response

from user.models import User
from user.serializers import UserSerializer


class UserRegisterView(CreateAPIView, GenericAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def post(self, request, *args, **kwargs):
        data = request.data
        print(data)
        serializer = self.get_serializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(data={'message': 'Successful!'}, status=status.HTTP_200_OK)
        return Response(data={'message': 'Invalid data'}, status=status.HTTP_400_BAD_REQUEST)



