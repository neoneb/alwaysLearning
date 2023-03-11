//LEGACY
// const c = require('./script2');
/////////////////
// import { largeNumber } from './script2.js';

//LEGACY
// const a = c.largeNumber;

// const c = require('http');
// console.log(c);

let a;

const b = 5;
if (1 === 1) {
  const { largeNumber } = await import('./script2.js');
  a = largeNumber;
}

console.log(a + b);

// setTimeout(() => {
//   console.log(__dirname);
// }, 3000);
