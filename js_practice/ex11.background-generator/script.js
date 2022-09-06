const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomButton = document.querySelector('button');


color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));'

function setGradient (e) {
   body.style.background = 
   "linear-gradient(to right, " 
   + color1.value 
   + ", " 
   + color2.value 
   + ")";

   css.textContent = body.style.background + ";";
}

let red1 = Math.floor(Math.random() * 256);
let blue1 = Math.floor(Math.random() * 256);
let green1 = Math.floor(Math.random() * 256);
let red2 = Math.floor(Math.random() * 256);
let blue2 = Math.floor(Math.random() * 256);
let green2 = Math.floor(Math.random() * 256);

console.log(red1,blue1,green1,red2,blue2,green2);

function randomize (e) {

   body.style.background = 'linear-gradient(to right, ' 
   + 'rgb('
   + red1
   +', ' 
   + blue1
   +', '
   + green1
   +'), ' 
   + 'rgb('
   + red2
   +', ' 
   + blue2
   +', '
   + green2
   +'))';
   css.textContent = body.style.background + ";";
}
//LAST THING: FIGURE OUT WHY BUTTON ONLY WORKS ONCE
   
randomButton.addEventListener('click', (e) => 
{randomize(e)});


color1.addEventListener('input', (e) => 
   {setGradient(e)}); 		

color2.addEventListener('input', (e) => 
   {setGradient(e)});
