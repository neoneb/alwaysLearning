//selectors
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//add list item
const listButton = document.querySelectorAll('.btn');
	for( i = 0; i < listButton.length; i++) {		
}

const listItems = document.querySelectorAll('.list-item');
	for( i = 0; i < listItems.length; i++) {	
}

//declarations for list items
function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li, delButton);
	input.value = "";
	var delButton = document.createElement("button");
	li.appendChild(delButton);
	delButton.classList.add("btn");
	delButton.innerHTML='Delete';
}

function inputLength() {
	return input.value.length;
}

//add list item from button click
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//allow "enter" key stroke to add list item
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

//strikeout list item on click
function strikeThroughOnClick(event) {
	if (event.target.tagName === "LI") {
		 event.target.classList.toggle('done');
	}
}

//delete list item with button
function deleteListElement(element) {
	if (element.target.className === "btn"){
		 element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	strikeThroughOnClick(element);
	deleteListElement(element);
}

//event listeners
ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

