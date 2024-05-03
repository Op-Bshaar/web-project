from django.db import models

# Create your models here.
class Book(models.Model):
    bookName = models.CharField(max_length=255);
    catgorey = models.CharField(max_length=255);
    title = models.CharField(max_length=255);
    author = models.CharField(max_length=255);
    description = models.TextField();
    # borrower = models.ForeignKey();

# class customUser():
#     pass
    