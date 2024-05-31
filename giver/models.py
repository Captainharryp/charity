from django.db import models

class Contact(models.Model):
	name=models.CharField(max_length=100)
	email=models.EmailField()
	phone_number = models.CharField(max_length=15)
	msg_subject=models.CharField(max_length=50)
	message=models.TextField()

	def __str__(self):
		return self.name




class Volunteer(models.Model):
	full_name=models.CharField(max_length=100)
	email_address=models.EmailField()
	phone_number = models.CharField(max_length=15)
	address=models.CharField(max_length=50)
	your_age=models.CharField(max_length=50)
	your_profession=models.CharField(max_length=50)
	message=models.TextField()

	def __str__(self):
		return self.full_name