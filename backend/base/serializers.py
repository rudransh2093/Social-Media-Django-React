from rest_framework import serializers
from .models import MyUser

class MyUserProfileSerializer(serializers.ModelSerializer):
    class Meta:

        follower_count = serializers.SerializerMethodField()
        following_count = serializers.SerializerMethodField()

        model = MyUser
        fields = ['username', 'bio', 'profile_image', 'follower_count', 'following_count']

        def get_follower_count(self, obj):
            return obj.followers.count()

        def get_following_count(self, obj):
            return obj.following.count()