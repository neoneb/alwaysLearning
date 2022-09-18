///////////////////////////////////////////////////////////
// Event Listeners
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
// Click event
///////////////////////////////////////////////////////////

//element.addEventListener("click", function);

const buttonTwo = document.querySelector('.btn-2');

function alertBtn() {
   alert('I also love JavaScript');
};

buttonTwo.addEventListener("click", alertBtn);

///////////////////////////////////////////////////////////
// Mouseover
///////////////////////////////////////////////////////////

const newBackgroundColor = document.querySelector('.box-3');

function changeBgColor() {
      newBackgroundColor.style.backgroundColor = 'blue';
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

//on event listener example!! https://www.youtube.com/watch?v=5fb2aPlgoys
