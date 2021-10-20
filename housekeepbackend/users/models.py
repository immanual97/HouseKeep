from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.

class Customer(models.Model):
    cid = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=250)
    lname = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=250)
    address = models.CharField(max_length=650,null=True)


class Service(models.Model):
    sid = models.AutoField(primary_key=True)
    service = models.CharField(max_length=300)


class Technician(models.Model):
    tid = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=250)
    lname = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=250)
    service = models.CharField(max_length=300)
    status = models.IntegerField()
    overallrating = models.IntegerField()

class Admin (models.Model):
    aid = models.AutoField(primary_key=True)
    fname = models.CharField(max_length=250)
    lname = models.CharField(max_length=300)
    email = models.CharField(max_length=300)
    password = models.CharField(max_length=250)


class WorkRequest(models.Model):
    wid = models.AutoField(primary_key=True)
    user = models.ForeignKey(Customer,related_name='username',on_delete=CASCADE)
    technician = models.ForeignKey(Technician,default=1,on_delete=models.DO_NOTHING)
    service = models.CharField(max_length=300)
    datetime = models.DateTimeField()
    accepted = models.BooleanField(default=False)
    workstatus = models.CharField(max_length=200)
    cost = models.IntegerField()
    payed = models.BooleanField(default=False)
    rating = models.IntegerField()

