// Changing the page title

let count = 0;

setInterval(function() {
	count++;
	document.title = "Title updated " + (count) + " times.";
}, 1000);

