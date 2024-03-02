# Generated by Django 3.2.4 on 2024-02-25 21:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0007_copyright_request'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='copyright_request',
            name='user',
        ),
        migrations.AddField(
            model_name='copyright_request',
            name='email',
            field=models.CharField(max_length=512, null=True),
        ),
        migrations.AddField(
            model_name='copyright_request',
            name='username',
            field=models.CharField(max_length=512, null=True),
        ),
    ]