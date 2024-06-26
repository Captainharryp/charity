jQuery(function ($) {
    'use strict';

    // Menu JS
    $(window).on('scroll', function() {
		if ($(this).scrollTop() > 50) {
			$('.main-nav').addClass('menu-shrink');
		} else {
			$('.main-nav').removeClass('menu-shrink');
		}
    });	

    // Header Search JS
    $('#close-btn').on('click', function() {
        $('#search-overlay').fadeOut();
        $('#search-btn').show();
    });
    $('#search-btn').on('click', function() {
        $('#search-overlay').fadeIn();
    });

	// Mean Menu JS
	jQuery('.mean-menu').meanmenu({
	    meanScreenWidth: '991'
	});

	// Nice Select JS
	$('select').niceSelect();
	
    // Modal Video JS
    $('.js-modal-btn').modalVideo();

    // Wow JS
    new WOW().init();

    // Popup Image JS
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        'fadeDuration': 100,
		'imageFadeDuration': 200,
		'disableScrolling': true,
		'positionFromTop': 120,
    });

    // Preloader JS
	jQuery(window).on('load', function(){
		jQuery('.loader').fadeOut(500);
	});

	// Banner Slider JS
	$('.banner-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 4000,
		autoplayHoverPause: true,
		animateOut: 'fadeOut',
		animateIn: 'fadeIn',
		navText: [
			"<i class='icofont-rounded-double-left'></i>",
			"<i class='icofont-rounded-double-right'></i>"
        ],
	});

	// Gallery Slider JS
	$('.gallery-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		dots: false,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive:{
            0:{
                items: 1,
            },
            600:{
                items: 3,
            },
            1000:{
                items: 5,
            }
        }
	});

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $('.odometer');
		odo.each(function() {
			var countNumber = $(this).attr('data-count');
			$(this).html(countNumber);
		});
	});

	// Testimonial Slider JS
	$('.testimonial-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 20,
		nav: false,
		dots: true,
		smartSpeed: 1000,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
	});

	// Accordion JS
	$('.accordion > li:eq(0) a').addClass('active').next().slideDown();
	$('.accordion a').on('click', function(j) {
		var dropDown = $(this).closest('li').find('p');
		$(this).closest('.accordion').find('p').not(dropDown).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} 
		else {
			$(this).closest('.accordion').find('a.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

	// Timer JS
	let getDaysId = document.getElementById('days');
	if(getDaysId !== null){
		
		const second = 1000;
		const minute = second * 60;
		const hour = minute * 60;
		const day = hour * 24;

		let countDown = new Date('December 25, 2025 00:00:00').getTime();
		setInterval(function() {
			let now = new Date().getTime();
			let distance = countDown - now;

			document.getElementById('days').innerText = Math.floor(distance / (day)),
			document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
			document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
			document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
		}, second);
	};

    // Back to Top JS
    $(function(){
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 500) $('.go-top').addClass('active');
            if (scrolled < 500) $('.go-top').removeClass('active');
        });  
        $('.go-top').on('click', function() {
            $('html, body').animate({ scrollTop: '0' },  500);
        });
    });

    // Subscribe Form JS
	$('.newsletter-form').validator().on('submit', function (event) {
		if (event.isDefaultPrevented()) {
			// Hande the invalid form...
			formErrorSub();
			submitMSGSub(false, 'Please enter your email correctly.');
		} else {
			// Everything looks good!
			event.preventDefault();
		}
	});
	function callbackFunction (resp) {
		if (resp.result === 'success') {
			formSuccessSub();
		}
		else {
			formErrorSub();
		}
	}
	function formSuccessSub(){
		$('.newsletter-form')[0].reset();
		submitMSGSub(true, 'Thank you for subscribing!');
		setTimeout(function() {
			$('#validator-newsletter').addClass('hide');
		}, 4000)
	}
	function formErrorSub(){
		$('.newsletter-form').addClass('animated shake');
		setTimeout(function() {
			$('.newsletter-form').removeClass('animated shake');
		}, 1000)
	}
	function submitMSGSub(valid, msg){
		if(valid){
			var msgClasses = 'validation-success';
		} else {
			var msgClasses = 'validation-danger';
		}
		$('#validator-newsletter').removeClass().addClass(msgClasses).text(msg);
	}
	
	// AJAX Mail Chimp JS
	$('.newsletter-form').ajaxChimp({
		url: 'https://hibootstrap.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9', // Your url MailChimp
		callback: callbackFunction
	});

	// Buy Now Btn
	/*$('body').append("<a href='https://themeforest.net/checkout/from_item/29834649?license=regular&support=bundle_6month&_ga=2.45219939.634514020.1646539215-1425290503.1590986634' target='_blank' class='buy-now-btn'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>");*/

	// Switch Btn
	$('body').append("<div class='switch-box'><label id='switch' class='switch'><input type='checkbox' onchange='toggleTheme()' id='slider'><span class='slider round'></span></label></div>");
}(jQuery));


// function to set a given theme/color-scheme
function setTheme(themeName) {
    localStorage.setItem('findo_theme', themeName);
    document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
    if (localStorage.getItem('findo_theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

// Immediately invoked function to set the theme on initial load
(function () {
    if (localStorage.getItem('findo_theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('slider').checked = false;
    } else {
        setTheme('theme-light');
      document.getElementById('slider').checked = true;
    }
})();





document.addEventListener('DOMContentLoaded', function() {
    const donationForm = document.getElementById('donationForm');
    if (!donationForm) {
        
        return;
    }

    const radioButtons = document.querySelectorAll('input[name="inlineRadioOptions"]');
    const generalForm = document.getElementById('generalForm');
    const paypalForm = document.getElementById('paypalForm');
    const bitcoinForm = document.getElementById('bitcoinForm');

    const generalSubmit = document.getElementById('generalSubmit');
    const paypalSubmit = document.getElementById('paypalSubmit');
    const bitcoinSubmit = document.getElementById('bitcoinSubmit');

    // Get URLs from data attributes
    const generalFormUrl = donationForm.getAttribute('data-general-url');
    const paypalFormUrl = donationForm.getAttribute('data-paypal-url');
    const bitcoinFormUrl = donationForm.getAttribute('data-bitcoin-url');

    radioButtons.forEach(radio => {
        radio.addEventListener('change', function() {
            if (this.value === 'option1') { // PayPal selected
                generalForm.classList.add('hidden');
                paypalForm.classList.remove('hidden');
                bitcoinForm.classList.add('hidden');
            } else if (this.value === 'option4') { // Bitcoin selected
                generalForm.classList.add('hidden');
                paypalForm.classList.add('hidden');
                bitcoinForm.classList.remove('hidden');
            } else { // Other options selected
                generalForm.classList.remove('hidden');
                paypalForm.classList.add('hidden');
                bitcoinForm.classList.add('hidden');
            }
        });
    });

    generalSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = generalFormUrl;
    });

    paypalSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = paypalFormUrl;
    });

    bitcoinSubmit.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = bitcoinFormUrl;
    });
});



document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const video = document.getElementById('myVideo');
    const overlay = document.getElementById('videoOverlay');

    playButton.addEventListener('click', function() {
        video.play();
        overlay.style.display = 'none';
    });
});



/*function playVideo() {
  var iframe = document.getElementById("youtube-video");
  iframe.src = iframe.src.replace("VIDEO_ID", "IuRCMsw1ppU");
}*/
