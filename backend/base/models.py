from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.

class MyUser(AbstractUser):
    
    bio = models.CharField( max_length=50)
    profile_image = models.ImageField(upload_to='profile_image/', blank=True, null=True)
    followers = models.ManyToManyField('self', symmetrical=False, related_name='following', blank=True)

