from django.shortcuts import render
from django.core.mail import send_mail
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Contact, Volunteer



def index(request):
	return render(request, 'index.html', {})   


def about(request):
	return render(request, 'about.html', {}) 


def contact(request):
    if request.method == "POST":
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone_number')
        msg_subject = request.POST.get('msg_subject')
        message = request.POST.get('message')

        # Validate the inputs
        if not all([name, email, phone_number, msg_subject, message]):
            alert_title = "Form Incomplete!"
            alert_message = "Please fill in all fields."
            return render(request, 'contact.html', {'alert_title': alert_title, 'alert_message': alert_message})



        # Create and save a new Contact object
        contact = Contact.objects.create(
            name=name,
            email=email,
            phone_number=phone_number,
            msg_subject=msg_subject,
            message=message,
        )

        email_body = f"""
        Name: {name}
        Email: {email}
        Phone Number: {phone_number}
        Subject: {msg_subject}
        Message: {message}
        """

        # Send an email
        send_mail(
            msg_subject,  # Subject of the email
            email_body,   # Body of the email
            email,        # Sender's email address (from the form)
            ['abcaptain60@gmail.com'],  # Recipient's email address (replace with your email)
            fail_silently=False,
        )

        alert_title = "Form Submitted!"
        alert_message = "I am happy to hear from you. I will get back to you as soon as possible."

        return render(request, 'contact.html', {'name': name, 'alert_title': alert_title, 'alert_message': alert_message})
    else:
        return render(request, 'contact.html', {})

	  


def blog(request):
	return render(request, 'blog.html', {})


def nextblog(request):
    return render(request, 'next_blog.html', {})


def blogs(request):
	return render(request, 'blog-details.html', {})      


def faq(request):
	return render(request, 'faq.html', {})   



def privacy(request):
	return render(request, 'privacy-policy.html', {})   


def terms(request):
	return render(request, 'terms-conditions.html', {})   


def gallery(request):
	return render(request, 'gallery.html', {})   


def event(request):
	return render(request, 'events.html', {})  


def events(request):
	return render(request, 'event-details.html', {})  


def donation(request):
	return render(request, 'donations.html', {})      


def donations(request):
	return render(request, 'donation-details.html', {})  


def gallery2(request):
	return render(request, 'gallery-2.html', {})  


def gallery3(request):
	return render(request, 'gallery-3.html', {})     


def gallery4(request):
	return render(request, 'gallery-4.html', {})


def volunteer(request):
    if request.method == "POST":
        full_name = request.POST.get('full_name')
        email_address = request.POST.get('email_address')
        phone_number = request.POST.get('phone_number')
        address = request.POST.get('address')
        your_age = request.POST.get('your_age')
        your_profession = request.POST.get('your_profession')
        message = request.POST.get('message')



        # Validate the inputs
        if not all([full_name, email_address, phone_number, address, your_age, your_profession, message]):
            alert_title = "Form Incomplete!"
            alert_message = "Please fill in all fields."
            return render(request, 'volunteer.html', {'alert_title': alert_title, 'alert_message': alert_message})



        # Create and save a new Contact object
        volunteer = Volunteer.objects.create(
            full_name=full_name,
            email_address=email_address,
            phone_number=phone_number,
            address=address,
            your_age=your_age,
            your_profession=your_profession,
            message=message,
        )

        email_body = f"""
        Name: {full_name}
        Email: {email_address}
        Phone Number: {phone_number}
        Address: {address}
        Age: {your_age}
        Profession: {your_profession}
        Message: {message}
        """


        # Define a subject for the email
        msg_subject = "New Volunteer Application"

        # Send an email
        send_mail(
            msg_subject,
            email_body,   # Body of the email
            email_address,        # Sender's email address (from the form)
            ['abcaptain60@gmail.com'],  # Recipient's email address (replace with your email)
            fail_silently=False,
        )

        alert_title = "Form Submitted!"
        alert_message = "I am happy to hear from you. I will get back to you as soon as possible."

        return render(request, 'volunteer.html', {'full_name': full_name, 'alert_title': alert_title, 'alert_message': alert_message})
    else:
        return render(request, 'volunteer.html', {})






def blog1(request):
    return render(request, 'blog_1.html', {})


def blog2(request):
    return render(request, 'blog_2.html', {})


def blog3(request):
    return render(request, 'blog_3.html', {})


def blog4(request):
    return render(request, 'blog_4.html', {})


def blog5(request):
    return render(request, 'blog_5.html', {})


def blog6(request):
    return render(request, 'blog_6.html', {})


def blog7(request):
    return render(request, 'blog_7.html', {})


def blog8(request):
    return render(request, 'blog_8.html', {})


def blog9(request):
    return render(request, 'blog_9.html', {})


def blog10(request):
    return render(request, 'blog_10.html', {})


def blog11(request):
    return render(request, 'blog_11.html', {})


def blog12(request):
    return render(request, 'blog_12.html', {})




def event1(request):
    return render(request, 'event_1.html', {})


def event2(request):
    return render(request, 'event_2.html', {})


def event3(request):
    return render(request, 'event_3.html', {})


def event4(request):
    return render(request, 'event_4.html', {})