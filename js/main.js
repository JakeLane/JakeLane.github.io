// Jump to tabs from url
$(function(){
	var hash = window.location.hash;
	hash && $('ul.nav a[href="' + hash + '"]').tab('show');

	$('.nav-tabs a').click(function (e) {
		$(this).tab('show');
		var scrollmem = $('body').scrollTop();
		window.location.hash = this.hash;
		$('html,body').scrollTop(scrollmem);
	});
});

// Display alert
var pieces = location.href.split("?");
if (pieces[1] == "contactsuccess#contact") {
	$("#contact-success").show();
}