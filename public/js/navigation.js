$(document).ready(function() {

	function toggleSidebar() {
		$(".button-navbar").toggleClass("active");
		$("main").toggleClass("move-to-left");
		$("footer").toggleClass("move-to-left");
		$(".sidebar").toggleClass("active");
		$(".sidebar-item").toggleClass("active");
	}

	$(".button-navbar").on("click tap", function() {
		toggleSidebar();
	});

	$(document).keyup(function(e) {
		if (e.keyCode === 27) {
			toggleSidebar();
		}
	});
});
