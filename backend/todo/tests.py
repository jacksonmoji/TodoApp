from rest_framework.test import APITestCase
from .models import Task

# Create your tests here.


class TaskCreateTestCase(APITestCase):
    def test_create_task(self):
        initial_task_count = Task.objects.count()

        task_attrs = {
            'task': 'testing new task creation',
            'is_active': True,
        }

        response = self.client.post('/api/v1/tasks/new', task_attrs)
        if response.status_code != 201:
            print(response.data)

        self.assertEqual(
            Task.objects.count(),
            initial_task_count + 1,
        )

        for attr, expected_value in task_attrs.items():
            self.assertEqual(response.data[attr], expected_value)


class TaskListTestCase(APITestCase):
    def test_list_tasks(self):
        tasks_count = Task.objects.count()
        response = self.client.get('/api/v1/tasks/')
        self.assertEqual(len(response.data), tasks_count)
