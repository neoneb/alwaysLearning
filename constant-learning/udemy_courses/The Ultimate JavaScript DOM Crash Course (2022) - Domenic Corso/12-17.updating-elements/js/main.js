// ----setAttribute() - change an attribute on an element

//const theName = document.querySelector(".name");

//theName.setAttribute("class", "name coffee") // ("existing attribute", "new attribute") only accepts strings or wrapped in quotes

//theName.className = ("name coffee"); // same as above

//const javascript = document.querySelector(".skills").lastElementChild;

// color: orange;
//javascript.style.color = "orange";
// background-color: black;
//javascript.style.backgroundColor = "black";
// (not recommended way)
//javascript.style.backgroundColor = null;

//const skillsList = document.querySelector(".skills");

//skillsList.innerHTML = `
   //<li>Washing the Dishes</li>
   //<li>Mowing the Lawn</li>
   //<li>Vacuuming</li>
//`;

//skillsList.insertAdjacentHTML("afterbegin", "<li>Java</li>")
/// afterbegin, afterend, beforebegin, beforeend

//const html = document.querySelector(".skills li");

//html.textContent = "Ruby";
//(cannot add html tags via this method)

const theName = document.querySelector(".name");

theName.classList.add("coffee");

//console.log(theName.classList.contains("berry"));

theName.classList.toggle("coffee");
