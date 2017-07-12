var letterIdStr = ["n1Id", "a1Id", "t1Id", "h1Id", "a2Id", "n2Id", "r1Id", "a3Id", "i1Id", "n3Id", "e1Id", "n1Sh", "a1Sh", "t1Sh", "h1Sh", "a2Sh", "n2Sh", "r1Sh", "a3Sh", "i1Sh", "n3Sh", "e1Sh"];
var letterIds = [];
var letterLengths = [];
function initScrollers() {
	letterIdStr.forEach(function(item, index, array) {
		letterIds[index] = document.getElementById(item);
	});
	letterIds.forEach(function(item, index, array) {
		letterLengths[index] = item.getTotalLength();
		if (index == 3 || index == 6 || index == 14 || index == 17) {
			letterLengths[index] -= 200;
		}
		if (index == 10 || index == 21) {
			letterLengths[index] -= 300;
		}
		if (index == 8 || index == 19) {
			letterLengths[index] -= 250;
		}
		item.style.strokeDasharray = letterLengths[index];
		if (index > 10) {
			item.setAttribute("stroke-opacity", 0.75)
		}
	});
	window.addEventListener("scroll", scroller);
}
function scroller() {
	var scrolled = document.body.scrollTop + document.documentElement.scrollTop;
	if (scrolled >= 0) {
		var viewHeight = document.documentElement.clientHeight;
		var scrollpercent = ((scrolled) / (viewHeight))*3;
		var opacity = 1 - scrollpercent;
		var draw = [];
		letterLengths.forEach(function(item, index, array) {
			draw[index] = item * scrollpercent;
		});
		letterIds.forEach(function(item, index, array) {
			item.style.strokeDashoffset = draw[index];
			item.setAttribute("stroke-opacity", 1);
			if (opacity <= 0) {
				item.setAttribute("stroke-opacity", 0);
			} else if (index > 10) {
				item.setAttribute("stroke-opacity", opacity - 0.25);
			} else {
				item.setAttribute("stroke-opacity", opacity + 0.4)
			}
		});
	}
}