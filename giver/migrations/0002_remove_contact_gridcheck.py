# Generated by Django 5.0.6 on 2024-05-25 07:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('giver', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contact',
            name='gridCheck',
        ),
    ]
