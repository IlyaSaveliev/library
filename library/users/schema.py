import graphene
from graphene_django import DjangoObjectType
from users.models import User
from todo.models import Todo, Project

class UserType(DjangoObjectType):
    class Meta:
        model = User
        fields = '__all__'

class ProjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = '__all__'

class TodoType(DjangoObjectType):
    class Meta:
        model = Todo
        fields = '__all__'

class Query(graphene.ObjectType):
    all_users = graphene.List(UserType)
    all_projects = graphene.List(ProjectType)
    all_todos = graphene.List(TodoType)
    user_by_id = graphene.Field(UserType, id=graphene.Int(required=True))

    def resolve_all_users(root, info):
        return User.objects.all()

    def resolve_all_projects(root, info):
        return Project.objects.all()

    def resolve_all_todos(root, info):
        return Todo.objects.all()

    def resolve_user_by_id(self, info, id):
        return User.objects.get(id=id)


class UserUpdateMutation(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        id = graphene.ID()

    user = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, username, id):
        user = User.objects.get(id=id)
        user.username = username
        user.save()
        return UserUpdateMutation(user)


class UserCreateMutation(graphene.Mutation):
    class Arguments:
        username = graphene.String(required=True)
        firstname = graphene.String(required=True)
        lastname = graphene.String(required=True)

    author = graphene.Field(UserType)

    @classmethod
    def mutate(cls, root, info, username, firstname, lastname):
        user = User(firstname=firstname, lastname=lastname, username=username)
        user.save()
        return UserCreateMutation(user)


class Mutation(graphene.ObjectType):
    update_user = UserUpdateMutation.Field()
    create_user = UserCreateMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)