// NPM, Jason practice
const _ = require('lodash');

const array = [1,2,3,4,5,6,7,8];
console.log('answer', _.without(array, 3));

// Selectors
const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomButton = document.querySelector('button');

// page load default values
color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));'

//set bg to input colors
const setGradient = (e) =>{
   body.style.background = `linear-gradient(to right,${color1.value}, ${color2.value})`; 
   css.textContent = `${body.style.background};`;
}

//random hex color function
const randomize = () => {
   const colorArray = [0, 1 ,2 ,3 ,4 ,5];
   const mapColorArray = colorArray.map(color => Math.floor(Math.random() * 256)); 
     
   const random1 = `rgb(${mapColorArray[0]}, ${mapColorArray[1]}, ${mapColorArray[2]})`;
   const random2 = `rgb(${mapColorArray[3]}, ${mapColorArray[4]}, ${mapColorArray[5]})`;

   body.style.background = `linear-gradient(to right,${random1}, ${random2})`; 
   css.textContent = `${body.style.background};`;

   const colorToHex = (color) => {
   const hexadecimal = color.toString(16);
   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
 }
   const convertRGBtoHex = (red, green, blue) => {
   return `#${colorToHex(red)}${colorToHex(green)}${colorToHex(blue)}`;
 }
   const randomHex1 = convertRGBtoHex(mapColorArray[0], mapColorArray[1], mapColorArray[2]);
   const randomHex2 = convertRGBtoHex(mapColorArray[3], mapColorArray[4], mapColorArray[5]);

   color1.value = randomHex1;
   color2.value = randomHex2;
   }

//event listeners
randomButton.addEventListener('click', randomize);

color1.addEventListener('input', (e) => 
   {setGradient(e)}); 		

color2.addEventListener('input', (e) => 
   {setGradient(e)});
