from base.models import MyUser
MyUser.objects.filter(username="rudvstheworld").exists()