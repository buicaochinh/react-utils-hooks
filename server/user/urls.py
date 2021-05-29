from django.urls import path
from user.views import UserRegisterView


urlpatterns = [
    path('api/register', UserRegisterView.as_view(), name='register'),
]