# Generated by Django 5.0.3 on 2024-04-29 17:40

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('caregiver', '0002_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carerequestmodel',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='id'),
        ),
        migrations.AlterField(
            model_name='ratingmodel',
            name='id',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False, verbose_name='id'),
        ),
    ]