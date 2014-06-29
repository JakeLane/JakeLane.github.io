$(window).bind("load", function() {
	// Tabs
	$(".tabs-menu a").click(function(event) {
		event.preventDefault();
		$(this).parent().addClass("current");
		$(this).parent().siblings().removeClass("current");
		var tab = $(this).attr("href");
		$("section").not(tab).hide();
		$(tab).fadeIn();
	});

	// Close parent element on close button click
	$(".close").click(function() {
		$(this).parent("div").fadeOut();
	});

	// Jump to tab from hash
	$("a[href='" + window.location.hash + "']").trigger("click");

	// Display alert
	var pieces = location.href.split("?");
	if (pieces[1] == "contact=success#contact") {
		$("#contact-success").show();
	}

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