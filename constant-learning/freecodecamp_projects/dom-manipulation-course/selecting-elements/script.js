// getElementById()

//const title = document.getElementById('main-heading');

//console.log(title);

///////////////////////////////////////////////////////////
// getElementByClassName()

//const listItem = document.getElementsByClassName('list-items');

//console.log(listItem);

///////////////////////////////////////////////////////////
// getElementsByTagName()

//const listItem = document.getElementsByTagName('li');

//console.log(listItem);

///////////////////////////////////////////////////////////
// querySelector()

//const container = document.querySelector('div');

//console.log(container);

///////////////////////////////////////////////////////////
// querySelectorAll()

//const container = document.querySelectorAll('div');

//console.log(container);

///////////////////////////////////////////////////////////
// DOM Manipulation
///////////////////////////////////////////////////////////
//Style
///////////////////////////////////////////////////////////

//const title = document.querySelector('#main-heading');

//title.style.color = 'red';

//doesn't work, need to loop through list items

//const listItems = document.querySelectorAll('list-items');

//listItems.style.fontSize = '10vh'

//const listItems = document.querySelectorAll('.list-items');

//for( i = 0; i < listItems.length; i++) {
//  listItems[i].style.fontSize = '2em';
//}

//console.log(listItems);

///////////////////////////////////////////////////////////
// Creating Elements
///////////////////////////////////////////////////////////

const ul = document.querySelector('ul');
const li = document.createElement('li');

///////////////////////////////////////////////////////////
// Adding Elements
///////////////////////////////////////////////////////////

ul.append(li);

///////////////////////////////////////////////////////////
// Modifying the Text
///////////////////////////////////////////////////////////

// const firstListItem = document.querySelector('.list-items');

// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

li.innerText = 'X-men';

///////////////////////////////////////////////////////////
// Modifying Attributes & Classes
///////////////////////////////////////////////////////////

//li.setAttribute ('id', 'main-heading');
//li.removeAttribute ('id');

//const title = document.querySelector('#main-heading');

//console.log(title.getAttribute('id'));

li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

///////////////////////////////////////////////////////////
// Remove Elements
///////////////////////////////////////////////////////////

li.remove();


