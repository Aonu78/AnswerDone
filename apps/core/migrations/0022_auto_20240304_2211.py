# Generated by Django 3.2.4 on 2024-03-04 17:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0021_alter_question_answer_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='question_answer',
            name='purchased',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AddField(
            model_name='question_answer',
            name='views',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
    ]
