from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import MyUser
from .serializers import MyUserProfileSerializer

@api_view(['GET'])
def get_user_profile_data(request, pk):

    try:
        user = MyUser.objects.get(username= pk)

    except MyUser.DoesNotExist:
        return Response({'error': 'user does not exist'})