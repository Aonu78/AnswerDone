# Generated by Django 3.2.4 on 2024-02-23 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0004_withdraw_request'),
    ]

    operations = [
        migrations.AlterField(
            model_name='withdraw_type',
            name='withdraw_type',
            field=models.CharField(max_length=255, null=True),
        ),
    ]
