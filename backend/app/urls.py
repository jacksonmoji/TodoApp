"""app URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path

import todo.views
import todo.api_views

urlpatterns = [
    path('api/v1/tasks/', todo.api_views.TaskList.as_view()),
    path('api/v1/tasks/new', todo.api_views.TaskCreate.as_view()),
    path('api/v1/tasks/<int:id>/',
         todo.api_views.TaskRetrieveUpdateDestroy.as_view()),
    path('api/v1/articles/get_user_translations/',
         todo.api_views.delete_completed_tasks, name='delete_completed_tasks'),

    path('admin/', admin.site.urls),
]
