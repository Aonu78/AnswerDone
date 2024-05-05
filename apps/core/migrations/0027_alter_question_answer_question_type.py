# Generated by Django 3.2.4 on 2024-04-16 18:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0026_qa_types'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question_answer',
            name='question_type',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='questions', to='core.qa_types'),
        ),
    ]