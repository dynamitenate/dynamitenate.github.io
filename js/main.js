window.addEventListener('load', async(event) => {
    // Initialize Parallax scroller on the page
	var parallaxObjects = await getParallaxObjects();
	window.addEventListener('resize', () => initParallaxObjects(parallaxObjects));
	initParallaxObjects(parallaxObjects);
	window.addEventListener('scroll', () => setParallaxBackgroundPosition(parallaxObjects));
});