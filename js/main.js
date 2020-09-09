window.addEventListener('load', async(event) => {
    // Initialize Parallax scroller on the page
	var parallaxObjects = await getParallaxObjects();
	initParallaxObjects(parallaxObjects);
	window.addEventListener('resize', () => initParallaxObjects(parallaxObjects));
	window.addEventListener('scroll', () => setParallaxBackgroundPosition(parallaxObjects));

	// Initialize Name scroller on the page
	initLetters();
});