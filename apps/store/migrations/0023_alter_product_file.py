# Generated by Django 3.2.4 on 2024-05-07 21:25

import apps.store.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0022_auto_20240425_2048'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='file',
            field=models.FileField(blank=True, null=True, storage=apps.store.models.MaxLengthFileSystemStorage(), upload_to='uploads/product_files/', validators=[apps.store.models.validate_file_extension]),
        ),
    ]
