from django.db import models

#database task model
class Task(models.Model):
    id = models.AutoField(primary_key=True)
    task = models.CharField(max_length=200)
    is_active = models.BooleanField(default=True)