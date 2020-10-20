window.addEventListener('load', async(event) => {
    // Initialize Parallax scroller on the page
	var parallaxObjects = await getParallaxObjects();
	initParallaxObjects(parallaxObjects);
	window.addEventListener('resize', () => initParallaxObjects(parallaxObjects));
	window.addEventListener('scroll', () => setParallaxBackgroundPosition(parallaxObjects));

	// Initialize Name scroller on the page
	initLetters();
});

function setWorkActive(id) {
	let element = document.getElementById(id);
	addActiveClass(element);
	let textId = element.dataset['workTextId'];
	let textElement = document.getElementById(textId);
	addActiveClass(textElement);
}

function addActiveClass(element) {
	element.classList.add('active');
	[...element.parentElement.children].forEach(childElement => {
		if (childElement.id != element.id) {
			childElement.classList.remove('active');
		}
	});
}