from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from todo.serializers import TaskSerializer
from todo.models import Task


class TaskList(ListAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        task_status = self.request.query_params.get('status', None)

        if task_status is None:
            return super().get_queryset()

        queryset = Task.objects.all()

        if task_status == 'active':
            return queryset.filter(
                is_active=True,
            )

        if task_status == 'complete':
            return queryset.filter(
                is_active=False
            )

        return queryset


class TaskCreate(CreateAPIView):
    serializer_class = TaskSerializer

    def create(self, request, *args, **kwargs):
        return super().create(request, *args, **kwargs)


class TaskRetrieveUpdateDestroy(RetrieveUpdateDestroyAPIView):
    queryset = Task.objects.all()
    lookup_field = 'id'
    serializer_class = TaskSerializer

    def delete(self, request, *args, **kwargs):
        task_id = request.data.get('id')
        response = super().delete(request, *args, **kwargs)

        if response.status_code == 204:
            from django.core.cache import cache
            cache.delete('task_data_{}'.format(task_id))

        return response

    def update(self, request, *args, **kwargs):
        response = super().update(request, *args, **kwargs)

        if response.status_code == 200:
            from django.core.cache import cache
            task = response.data
            cache.set('task_data_{}'.format(task['id']), {
                'task': task['task'],
                'is_active': task['is_active'],
            })

        return response


@api_view(['GET', ])
def delete_completed_tasks(request):
    try:
        Task.objects.filter(is_active=True).delete()

        return Response({
            'status': 'Accepted Request',
            'message': 'Successful'
        }, status=status.HTTP_202_ACCEPTED)
    except:
        return Response({
            'status': 'Rejected Request',
            'message': 'Failed to delete records check backend'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
