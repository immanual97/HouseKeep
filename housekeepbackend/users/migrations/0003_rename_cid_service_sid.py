# Generated by Django 3.2.5 on 2021-09-03 05:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_alter_address_address'),
    ]

    operations = [
        migrations.RenameField(
            model_name='service',
            old_name='cid',
            new_name='sid',
        ),
    ]
