$(document).ready(function() {
	// Tabs
	$(".tabs-menu a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$("section").not(tab).css("display", "none");
		$(tab).fadeIn();
	});
	
	// Jump to tab from hash
	$('a[href="' + window.location.hash + '"]').trigger('click');
	
	// Load animation
	$("header > h1").animate({
		"opacity" : "1"
	}, 500, function() {
		$("header > nav").animate({
			"opacity" : "1"
		}, 500, function() {
			$("article").animate({
				"opacity" : "1"
			}, 500, function() {
				$("footer").animate({
					"opacity" : "1"
				}, 500);
			});
		});
	});
});