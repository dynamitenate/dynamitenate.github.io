var images = [".parallax.img1"];
var preffix = "translate3d(0px, ";
var suffix = "px, 0px)";
var scrolledDelta;
var newProperty;
var query;
function parallax() {
	scrolledDelta = (document.body.scrollTop + document.documentElement.scrollTop)*0.2;
	images.forEach(function(item, index, array) {
		query = document.querySelector(item);
		if (index == 0) {
			newProperty = preffix + (scrolledDelta) + suffix;
		}
		query.style["-webkit-transform"] = newProperty;
		query.style["-moz-transform"] = newProperty;
		query.style.transform = newProperty;
	});
}
window.addEventListener("scroll", parallax);