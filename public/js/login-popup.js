$(document).ready(function(c) {
	
	// Open Popup Window
	$('a.login-window').click(function() {
		

		//Getting the variable's value from a link 
		var loginBox = $(this).attr('href');

		//Fade in the Popup
		$(loginBox).fadeIn(300);

		$('div.login-user').fadeIn(300);

		//Set the center alignment padding + border see css style
		// var popMargTop = ($(loginBox).height() + 24) / 2;
		// var popMargLeft = ($(loginBox).width() + 24) / 2;
		//
		// $(loginBox).css({
		// 	'margin-top' : -popMargTop,
		// 	'margin-left' : -popMargLeft
		// });

		// Add the mask to body
		$('body').append('<div id="mask"></div>');
		$('#mask').fadeIn(300);

		return false;
	});
	
	// Calling Login Form
	$("#login-form").click(function() {
		$(".signup-user").hide();
		$(".login-user").show();
		$(".social_login").show();
		return false;

	});
	
	// Calling Signup Form
	$("#signup-form").click(function() {
		$(".login-user").hide();
		$(".social_login").hide();
		$(".signup-user").show();
		return false;
		
	});

	// Close Popup Window
	$('.popup-header__close').on('click', function(c) {
		
		$(".signup-user").hide();
		$(".login-user").hide();
		
		$('section.login-popup, #mask').fadeOut('slow', function(c) {
		});

		// $('section.login-popup, .login-user, #mask').fadeOut('slow', function(c) {
		// });

		// $('.login-user').append('<div id="maskk"></div>');
		return false;
		
	});
	
});

