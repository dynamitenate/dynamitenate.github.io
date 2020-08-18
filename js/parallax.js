function getScroll() {
	return (document.body.scrollTop || document.documentElement.scrollTop);
}

function getDistanceToTop(element) {
	return (element.getBoundingClientRect().top + getScroll());
}

function getParallaxObjects() {
	let parallaxElements = [...document.getElementsByClassName("parallax")];
	let promises = parallaxElements.map(element => getParallaxElement(element));
	return Promise.all(promises);
}
function getParallaxElement(element) {
	let computedStyle = window.getComputedStyle(element);
	if (computedStyle['background-image']) {
		return new Promise((resolve, reject) => {
			let imageURL = computedStyle['background-image'].slice(4, -1).replace(/"/g, "");
			let image = new Image();
			image.src = imageURL;
			image.onload = () => resolve({
				element,
				boundsTop: getDistanceToTop(element),
				image: {
					url: imageURL,
					width: image.width,
					height: image.height
				}
			});
		});
	}
	return null;
}
function setParallaxBackgroundPosition(parallaxObjects) {
	let scroll = getScroll();
	parallaxObjects.forEach((parallaxObject) => {
		let height = parallaxObject.element.clientHeight;
		let scrollDistance = (scroll - parallaxObject.boundsTop);
		let parallaxDistance = scrollDistance * 0.5;
		parallaxObject.element.style['background-position'] = `0px ${parallaxDistance}px`;
	});
}
function setParallaxBackgroundSize(parallaxObject) {
	let imageRatio = (parallaxObject.image.width / parallaxObject.image.height);
	let divRatio = (parallaxObject.element.clientWidth / parallaxObject.element.clientHeight);
	if (imageRatio > divRatio) {
		let newHeight = (parallaxObject.element.clientHeight)
		parallaxObject.element.style['backgroundSize'] = `auto ${newHeight}px`;
	}
	else {
		let newWidth = (parallaxObject.element.clientWidth)
		parallaxObject.element.style['backgroundSize'] = `${newWidth}px auto`;
	}
}
function initParallaxObjects(parallaxObjects) {
	parallaxObjects.forEach((parallaxObject) => {
		parallaxObject.element.style['backgroundPosition'] = parallaxObject.element.style['backgroundPosition'] ?? '0px 0px';
		parallaxObject.element.addEventListener('resize', () => setParallaxBackgroundSize(parallaxObject));
		setParallaxBackgroundSize(parallaxObject);
	});
}

function addParallax(elements) {
	elements.forEach(e => {
		e.element.style['backgroundPosition'] = parallaxObject.element.style['backgroundPosition'] ?? '0px 0px';
	});
}

window.addEventListener('load', async(event) => {
	var parallaxElements = document.querySelectorAll('[data-parallax]');
	addParallax(parallaxElements);

	// var parallaxObjects = await getParallaxObjects();
	// window.addEventListener('resize', () => initParallaxObjects(parallaxObjects));
	// initParallaxObjects(parallaxObjects);
	// window.addEventListener('scroll', () => setParallaxBackgroundPosition(parallaxObjects));
});