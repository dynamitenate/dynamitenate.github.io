function getScroll() {
	return (document.body.scrollTop || document.documentElement.scrollTop);
}

function setLetterProgress(letterObjects) {
	let scroll = getScroll();
	if (scroll >= 0) {
		let scrollPercentage = (scroll / document.documentElement.clientHeight);
		letterObjects.forEach((letterObject) => {
			setLetterOffset(letterObject, scrollPercentage * 3);
			setLetterOpacity(letterObject, scrollPercentage * 3);
		});
	}
}

function setLetterOffset(letterObject, percentage) {
	let newOffset = (letterObject.length * percentage);
	if (newOffset <= 0) {
		letterObject.path.style.strokeDashoffset = 0;
	} else if (newOffset <= letterObject.length) {
		letterObject.path.style.strokeDashoffset = newOffset;
	} else {
		letterObject.path.style.strokeDashoffset = letterObject.length;
	}
}

function setLetterOpacity(letterObject, percentage) {
	let newOpacity = (1 - percentage / 2);
	if (newOpacity <= 0) {
		letterObject.element.style['opacity'] = 0;
	} else if (newOpacity <= 100) {
		letterObject.element.style['opacity'] = newOpacity;
	} else {
		letterObject.element.style['opacity'] = 1000;
	}
}

function getLetterObjects() {
	let letterElements = [...document.querySelectorAll('svg[data-scrolldraw]')];
	let letterObjects = letterElements.map(element => getLetterElement(element));
	return letterObjects;
}

function getLetterElement(element) {
	let path = element.getElementsByTagName('path')[0];
	let length = path.getTotalLength();
	path.style.strokeDasharray = length
	return {
		element,
		path,
		length
	}
}

function initLetters() {
	let letterObjects = getLetterObjects();
	window.addEventListener("scroll", () => setLetterProgress(letterObjects));
}