# Generated by Django 3.2.4 on 2024-03-02 21:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_auto_20240302_0426'),
    ]

    operations = [
        migrations.AddField(
            model_name='question_answer',
            name='title',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]