(function ($) {
"use strict";


	// Sticky header active code
	$(window).on('scroll', function(){
		var scroll = $(window).scrollTop();
		if (scroll > 350) {
			$(".sticky-header").addClass("sticky");
		} else {
			$(".sticky-header").removeClass("sticky");
		}
	});

	// Porfolio filter active code
	var mixer = mixitup('.portfolio-wrapper');

	// Skill bar active code
	$('.skillbar').skillBars({
	    from: 0,
	    speed: 4500, 
	    interval: 100,
	    decimals: 0,
    });

	// Testimonial Carousel active code
    $('.testimonial-wrapper').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    navText:false,
	    autoplay: true,
	    autoplayTimeout: 3500,
	    smartSpeed: 750,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	// Scroll Up active code
	$(window).scroll(function() {
		if($(this).scrollTop() > 350) {
			$(".scroll-up-btn").fadeIn();
		} else {
			$(".scroll-up-btn").fadeOut();
		}
	});

	$(".scroll-up-btn").click(function() {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
	});


	// This code is for smooth scrolling 
	// Select all links with hashes
		$('a[href*="#"]')
		  // Remove links that don't actually link to anything
		  .not('[href="#"]')
		  .not('[href="#0"]')
		  .click(function(event) {
		    // On-page links
		    if (
		      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		      && 
		      location.hostname == this.hostname
		    ) {
		      // Figure out element to scroll to
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		      // Does a scroll target exist?
		      if (target.length) {
		        // Only prevent default if animation is actually gonna happen
		        event.preventDefault();
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000, function() {
		          // Callback after animation
		          // Must change focus!
		          var $target = $(target);
		          $target.focus();
		          if ($target.is(":focus")) { // Checking if the target was focused
		            return false;
		          } else {
		            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
		            $target.focus(); // Set focus again
		          };
		        });
		      }
		    }
		  });

})(jQuery);	