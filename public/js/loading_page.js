// Show full page after load
$.LoadingOverlay("show");

// Hide it after 3 seconds
setTimeout(function(){
	$.LoadingOverlay("hide");
}, 3000);
