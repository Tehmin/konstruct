/*--Hamburger menu--*/
$(document).ready(function() {
	$("body").on('click', '.top', function() {
		$("nav.menu").toggleClass("menu_show");
	});
});


/*--Sticky header--*/
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
