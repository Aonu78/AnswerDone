import os
from django.core.management import execute_from_command_line

# Set the Django settings module
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'stuvia_project.settings')

# Define the command to execute
command_line = ['manage.py', 'collectstatic']

# Execute the command
execute_from_command_line(command_line)
