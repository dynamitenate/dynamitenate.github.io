var letterIdStr = ["n1Id", "a1Id", "t1Id", "h1Id", "a2Id", "n2Id", "r1Id", "a3Id", "i1Id", "n3Id", "e1Id", "n1Sh", "a1Sh", "t1Sh", "h1Sh", "a2Sh", "n2Sh", "r1Sh", "a3Sh", "i1Sh", "n3Sh", "e1Sh"];
var letterIds = [];
var letterLengths = [];
var mobile;
function initScrollers() {
	letterIdStr.forEach(function(item, index, array) {
		letterIds[index] = document.getElementById(item);
	});
	initPaths();
	letterIds.forEach(function(item, index, array) {
		letterLengths[index] = item.getTotalLength();
		if (index == 3 || index == 6 || index == 14 || index == 17) {
			if (mobile) {
				letterLengths[index] -= 100;
			} else {
				letterLengths[index] -= 200;
			}
		}
		if (index == 10 || index == 21) {
			if (mobile) {
				letterLengths[index] -= 150;
			} else {
				letterLengths[index] -= 300;
			}
		}
		if (index == 8 || index == 19) {
			if (mobile) {
				letterLengths[index] -= 75;
			} else {
				letterLengths[index] -= 250;
			}
		}
		item.style.strokeDasharray = letterLengths[index];
		if (index > 10) {
			item.setAttribute("stroke-opacity", 0.75)
		}
	});
	window.addEventListener("scroll", scroller);
}
function initPaths() {
	if (document.documentElement.clientWidth >= 850) {
		mobile = false;
		letterIds[0].setAttribute('d', "M10,150 L10,25 L90,125 L90,0");
		letterIds[1].setAttribute('d', "M5,150 L50,25 L95,150 M15,115 L85,100");
		letterIds[2].setAttribute('d', "M50,10 L0,10 M50,10 L100,10 M50,0 L50,150");
		letterIds[3].setAttribute('d', "M10,150 L10,0 M90,0 L90,150 M50,80 L0,80 M50,80 L100,80");
		letterIds[4].setAttribute('d', "M5,150 L50,25 L95,150 M15,115 L85,100");
		letterIds[5].setAttribute('d', "M10,150 L10,25 L90,125 L90,0");
		letterIds[6].setAttribute('d', "M0,10 L40,10 a50,40 0 0,1 50,40 a-50,40 0 0,1 -40,40 L5,100 M10,150 L10,0 M40,92 a50,40 0 0,1 50,40 L90,150");
		letterIds[7].setAttribute('d', "M5,150 L50,25 L95,150 M15,115 L85,100");
		letterIds[8].setAttribute('d', "M50,10 L0,10 M50,10 L100,10 M50,0 L50,75 M50,150 L50,75 M50,140 L0,140 M50,140 L100,140");
		letterIds[9].setAttribute('d', "M10,150 L10,25 L90,125 L90,0");
		letterIds[10].setAttribute('d', "M0,10 L100,10 M0,75 L75,75 M0,140 L100,140 M10,75 L10,0 M10,75 L10,150");
		letterIds[11].setAttribute('d', "M5,155 L5,30 L85,130 L85,5");
		letterIds[12].setAttribute('d', "M0,155 L45,30 L90,155 M10,120 L80,105");
		letterIds[13].setAttribute('d', "M45,15 L-5,15 M45,15 L95,15 M45,5 L45,155");
		letterIds[14].setAttribute('d', "M5,155 L5,5 M85,5 L85,155 M45,85 L-5,85 M45,85 L95,85");
		letterIds[15].setAttribute('d', "M0,155 L45,30 L90,155 M10,120 L80,105");
		letterIds[16].setAttribute('d', "M5,155 L5,30 L85,130 L85,5");
		letterIds[17].setAttribute('d', "M-5,15 L35,15 a50,40 0 0,1 50,40 a-50,40 0 0,1 -40,40 L0,105 M5,155 L5,5 M35,97 a50,40 0 0,1 50,40 L85,155");
		letterIds[18].setAttribute('d', "M0,155 L45,30 L90,155 M10,120 L80,105");
		letterIds[19].setAttribute('d', "M45,15 L-5,15 M45,15 L95,15 M45,5 L45,80 M45,155 L45,80 M45,145 L-5,145 M45,145 L95,145");
		letterIds[20].setAttribute('d', "M5,155 L5,30 L85,130 L85,5");
		letterIds[21].setAttribute('d', "M-5,15 L95,15 M-5,80 L70,80 M-5,145 L95,145 M5,80 L5,5 M5,80 L5,155");
	} else {
		mobile = true;
		document.querySelector(".namecontainer").style.transform = "translate(-50%, -15%)";
		var backLetters = document.querySelectorAll(".back");
		backLetters.forEach(function(item, index, array) {
			item.style["stroke-width"] = 10;
		});
		var frontLetters = document.querySelectorAll(".front");
		frontLetters.forEach(function(item, index, array) {
			item.style["stroke-width"] = 10;
		});
		var letterNodes = document.querySelectorAll(".letter");
		letterNodes.forEach(function(item, index, array) {
			item.style.padding = "8px";
			item.style.height = "75px";
			item.style.width = "50px";
		});
		letterIds.forEach(function(item, index, array) {
			item.setAttribute("stroke-width", 10);
		});
		letterIds[0].setAttribute('d', "M5,75 L5,13 L45,63 L45,0");
		letterIds[1].setAttribute('d', "M3,75 L25,13 L48,75 M8,58 L43,50");
		letterIds[2].setAttribute('d', "M25,5 L0,5 M25,5 L50,5 M25,0 L25,75");
		letterIds[3].setAttribute('d', "M5,75 L5,0 M45,0 L45,75 M25,40 L0,40 M25,40 L50,40");
		letterIds[4].setAttribute('d', "M3,75 L25,13 L48,75 M8,58 L43,50");
		letterIds[5].setAttribute('d', "M5,75 L5,13 L45,63 L45,0");
		letterIds[6].setAttribute('d', "M0,5 L20,5 a25,20 0 0,1 25,20 a-25,20 0 0,1 -20,20 L3,50 M5,75 L5,0 M20,46 a25,20 0 0,1 25,20 L45,75");
		letterIds[7].setAttribute('d', "M3,75 L25,13 L48,75 M8,58 L43,50");
		letterIds[8].setAttribute('d', "M25,5 L0,5 M25,5 L50,5 M25,0 L25,39 M25,75 L25,38 M25,70 L0,70 M25,70 L50,70");
		letterIds[9].setAttribute('d', "M5,75 L5,13 L45,63 L45,0");
		letterIds[10].setAttribute('d', "M0,5 L50,5 M0,38 L38,38 M0,70 L50,70 M5,38 L5,0 M5,38 L5,75");
		letterIds[11].setAttribute('d', "M0,80 L0,18 L40,68 L40,5");
		letterIds[12].setAttribute('d', "M-2,80 L20,18 L43,80 M3,63 L38,55");
		letterIds[13].setAttribute('d', "M20,10 L-5,10 M20,10 L45,10 M20,5 L20,80");
		letterIds[14].setAttribute('d', "M0,80 L0,5 M40,5 L40,80 M20,35 L-5,35 M20,35 L45,35");
		letterIds[15].setAttribute('d', "M-2,80 L20,18 L43,80 M3,63 L38,55");
		letterIds[16].setAttribute('d', "M0,80 L0,18 L40,68 L40,5");
		letterIds[17].setAttribute('d', "M-5,10 L15,10 a25,20 0 0,1 25,20 a-25,20 0 0,1 -20,20 L-2,55 M0,80 L0,5 M15,51 a25,20 0 0,1 25,20 L40,80");
		letterIds[18].setAttribute('d', "M-2,80 L20,18 L43,80 M3,63 L38,55");
		letterIds[19].setAttribute('d', "M20,10 L-5,10 M20,10 L45,10 M20,5 L20,44 M20,80 L20,43 M20,75 L-5,75 M20,75 L45,75");
		letterIds[20].setAttribute('d', "M0,80 L0,18 L40,68 L40,5");
		letterIds[21].setAttribute('d', "M-5,10 L45,10 M-5,43 L33,43 M-5,75 L45,75 M0,43 L0,5 M0,43 L0,80");
	}
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