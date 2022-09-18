const css = document.querySelector('h3');
const color1 = document.querySelector('.color1');
const color2 = document.querySelector('.color2');
const body = document.getElementById('gradient');
const randomButton = document.querySelector('button');

color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = 'linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));'

const setGradient = (e) =>{
   body.style.background = `linear-gradient(to right,${color1.value}, ${color2.value})`; 
   css.textContent = `${body.style.background};`;
}

const randomize = () => {
   const colorArray = [0, 1 ,2 ,3 ,4 ,5];
   const mapColorArray = colorArray.map(color => Math.floor(Math.random() * 256)); 
     
   const random1 = `rgb(${mapColorArray[0]}, ${mapColorArray[1]}, ${mapColorArray[2]})`;
   const random2 = `rgb(${mapColorArray[3]}, ${mapColorArray[4]}, ${mapColorArray[5]})`;

   body.style.background = `linear-gradient(to right,${random1}, ${random2})`; 
   css.textContent = `${body.style.background};`;

   const ColorToHex = (color) => {
   const hexadecimal = color.toString(16);
   return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
 }
   const ConvertRGBtoHex = (red, green, blue) => {
   return `#${ColorToHex(red)}${ColorToHex(green)}${ColorToHex(blue)}`;
 }
   const randomHex1 = ConvertRGBtoHex(mapColorArray[0], mapColorArray[1], mapColorArray[2]);
   const randomHex2 = ConvertRGBtoHex(mapColorArray[3], mapColorArray[4], mapColorArray[5]);

   color1.value = randomHex1;
   color2.value = randomHex2;
   }

randomButton.addEventListener('click', randomize);

color1.addEventListener('input', (e) => 
   {setGradient(e)}); 		

color2.addEventListener('input', (e) => 
   {setGradient(e)});
