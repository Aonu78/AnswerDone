# Generated by Django 3.2.4 on 2024-03-02 21:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0017_question_answer_title'),
    ]

    operations = [
        migrations.AddField(
            model_name='question_answer',
            name='slug',
            field=models.CharField(blank=True, default=None, max_length=255, null=True),
        ),
    ]