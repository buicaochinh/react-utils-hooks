from django.contrib.auth.models import AbstractUser
# Create your models here.
from django.db import models


class User(AbstractUser):
    last_login = None
    is_staff = None
    is_superuser = None

    username = models.CharField(max_length=100, unique=True)
    password = models.CharField(max_length=100)

    REQUIRED_FIELDS = []

    def __str__(self):
        return self.username
