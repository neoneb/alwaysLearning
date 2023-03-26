// ----There is a lot of data available for you to read off of an HTML element----

//const theName = document.querySelector(".name");

//console.log(theName.getAttribute("title"));
//console.log(theName.getAttribute("class"));

//console.log(theName.hasAttribute("title"));
//console.log(theName.hasAttribute("for"));

//const skillsList = document.querySelector(".skills");
//const items = skillsList.children; (allows live collection add )
//const items = skillsList.querySelectorAll("li") (doesn't allow live collection add)

//console.log(skillsList.children);

//const myList = document.querySelector(".skills"); //(same as below)
//const css = document.querySelector(".skills li:nth-of-type(2)") //(li inside .skills: give me second element)

//console.log(css.parentElement == myList);
//console.log(css.parentElement.parentElement.parentElement);

//console.log(css.closest(".card")); //(closest parent with matching class)

const theName = document.querySelector(".name");
console.log (theName.textContent.trim());