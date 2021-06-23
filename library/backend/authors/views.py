from rest_framework.viewsets import ModelViewSet
from backend.authors.models import Author
from backend.authors.serializers import AuthorModelSerializer


class AuthorModelViewSet(ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorModelSerializer

