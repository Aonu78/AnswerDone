# Generated by Django 3.2.4 on 2024-03-03 22:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0018_question_answer_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='question_answer',
            name='price',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]