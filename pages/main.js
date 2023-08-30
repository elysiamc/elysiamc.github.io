// header decision
$(document).ready(function() {
	if ($(window).width() > 768) {
		$("#header").load("header/header-large.html");
		} else {
		$("#header").load("header/header-small.html");
	}
	$("#footer").load("header/footer.html");
});

// mobile dropdown
document.addEventListener('DOMContentLoaded', function() {
	var button = document.querySelector('.menutitle');
	var menu = document.querySelector('.menulinks');

	button.addEventListener('click', function() {
		if (menu.style.display === 'none') {
			menu.style.display = 'block';
		} else {
			menu.style.display = 'none';
		}
	});
});
