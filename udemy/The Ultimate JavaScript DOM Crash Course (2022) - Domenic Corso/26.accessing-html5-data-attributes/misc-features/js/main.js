// HTML5 Data Attributes - accessing data attributes with JavaScript

const clickMeButton = document.querySelector("button");

clickMeButton.addEventListener("click", function() {
	const message = clickMeButton.dataset.message;

	alert(message);
});