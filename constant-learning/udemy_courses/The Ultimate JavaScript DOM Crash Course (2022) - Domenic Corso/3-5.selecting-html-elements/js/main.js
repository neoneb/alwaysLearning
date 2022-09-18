// ----getElementById() -getting an HTML element using it's ID attribute----

// const colorsList = document.getElementById("colors");
//console.log(colorsList);

//----querySelector() - getting an HTML element using a CSS selector. "element" "#id" ".class"----

//const colorList = document.querySelector("#colors");
//console.log(colorList);

//----querySelectorAll() - getting multiple HTML elements using a CSS selector
//(document.querySelectorAll("every single li element with id of colors")("element within")----

const colors = document.querySelectorAll("#colors li");

const colorsList = document.getElementById("colors");
const colors = colorsList.querySelectorAll("li");
console.log(colors);

