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

function randomize () {
   let red1 = Math.floor(Math.random() * 256);
   let green1 = Math.floor(Math.random() * 256);
   let blue1 = Math.floor(Math.random() * 256);
   let red2 = Math.floor(Math.random() * 256);
   let green2 = Math.floor(Math.random() * 256);
   let blue2 = Math.floor(Math.random() * 256);

   const random1 = 'rgb(' + red1 + ', ' + green1 + ', ' + blue1 + ')';
   const random2 = 'rgb(' + red2 + ', ' + green2 + ', ' + blue2 + ')';
   body.style.background = 'linear-gradient(to right, ' 
   + random1
   + ', ' 
   + random2 
   + ')'; 
   css.textContent = body.style.background + ";";

function ColorToHex(color) {
   var hexadecimal = color.toString(16);
   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
 }
 function ConvertRGBtoHex(red, green, blue) {
   return "#" + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
 }
   let randomHex1 = ConvertRGBtoHex(red1, green1, blue1);
   let randomHex2 = ConvertRGBtoHex(red2, green2, blue2);

   color1.value = randomHex1;
   color2.value = randomHex2;
   }

randomButton.addEventListener('click', randomize);

color1.addEventListener('input', (e) => 
   {setGradient(e)}); 		

color2.addEventListener('input', (e) => 
   {setGradient(e)});
