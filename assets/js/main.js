  "use strict";


/*------------------------------------
 Smooth Scrolling Activation
 --------------------------------------*/

 function SmoothNavScrolling(){

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  	if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  		var target = $(this.hash);
  		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  		if (target.length) {
  			$('html, body').animate({
  				scrollTop: (target.offset().top - 56)
  			}, 1000, "easeInOutExpo");
  			return false;
  		}
  	}
  })};

/*------------------------------------
 Active Nav Selector Activation
 --------------------------------------*/
 function ActiveSelector() {
 	$('li a').click(function(e) {
 		e.preventDefault();
 		var $this = $(this);
 		$this.closest('ul').find('.active').removeClass('active');
 		$this.parent().addClass('active');

 	});
 };
/*------------------------------------
 WoW Animation Activation
 --------------------------------------*/
 function wowActivate() {
 	new WOW().init();
 };



/*------------------------------------
Go To Top Activation
--------------------------------------*/

function GoTop(){
	if ($(window).scrollTop() >= 500) {
		$('#go-top').fadeIn(); 
		
	}
	else {
		$('#go-top').fadeOut(); 
	}
};

$('#go-top').click(function(){ 
	$("html, body").animate({ scrollTop: 0 }, 800); 
	return false; 
});

/*------------------------------------
 Windows On Load Plugin Activation
 --------------------------------------*/
 $(window).on('load', function () {
 	wowActivate(),
 	ActiveSelector(),
 	SmoothNavScrolling();
 });


/*------------------------------------
 Windows On Load Plugin Activation
 --------------------------------------*/
 $(window).on('scroll', function () { 
 	GoTop();
 });

