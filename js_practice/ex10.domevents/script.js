var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

const listButton = document.querySelectorAll('.btn');
	for( i = 0; i < listButton.length; i++) {
		// listButton[i].addEventListener('click', (element) =>
		// {deleteListElement(element)}) 		
}

const listItems = document.querySelectorAll('.list-item');
	for( i = 0; i < listItems.length; i++) {	
}

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

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function strikeThroughOnClick(event) {
	if (event.target.tagName === "LI") {
		 event.target.classList.toggle('done');
	}
}

function deleteListElement(element) {
	if (element.target.className === "btn"){
		 element.target.parentElement.remove();
	}
}

function handleUlClick (element) {
	strikeThroughOnClick(element);
	deleteListElement(element);
}

ul.addEventListener("click", handleUlClick);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

