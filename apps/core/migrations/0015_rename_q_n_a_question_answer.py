# Generated by Django 3.2.4 on 2024-03-01 20:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0014_product_publisher'),
        ('core', '0014_q_n_a_created_at'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Q_n_A',
            new_name='Question_Answer',
        ),
    ]