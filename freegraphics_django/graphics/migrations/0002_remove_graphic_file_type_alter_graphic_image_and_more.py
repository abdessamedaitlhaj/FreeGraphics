# Generated by Django 4.2.9 on 2024-02-07 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('graphics', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='graphic',
            name='file_type',
        ),
        migrations.AlterField(
            model_name='graphic',
            name='image',
            field=models.URLField(),
        ),
        migrations.DeleteModel(
            name='FileType',
        ),
    ]
