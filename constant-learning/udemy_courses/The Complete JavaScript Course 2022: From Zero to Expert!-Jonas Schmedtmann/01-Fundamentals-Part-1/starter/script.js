//    let js = 'amazing';
//    if (js === 'amazing') alert('JavsScript is Fun');

//    40 + 8 + 23 - 10;
//    console.log(40 + 8 + 23 - 10)

//    console.log('Jonas');
//    console.log(23);

//    let firstName = 'Jonas';
//    console.log(firstName);
//    console.log(firstName);
//    console.log(firstName);

// let javascriptIsFun = true;

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Chris');

// let age = 30;
// age = 31;

// console.log(age)
//MATH OPERATORS
// const now = 2037;
// const ageChris = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageChris, ageSarah);

// 2 ** 3 //2 to the power of 3

// const firstName = 'Chris'
// const lastName= 'Cormier'
// console.log(firstName + ' ' + lastName);

//ASSIGNMENT OPERATORS
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4 // x = x * 4
// x++; //x = x + 1
// x--;
// x--;
// console.log(x);

//COMPARISON OPERATORS
// console.log(ageChris > ageSarah); // >, <, >=, <=,
// console.log(ageSarah >= 21);

// const isFullAge = ageSarah >= 21;

// console.log(now - 1991 > now - 2018)

// const now = 2037;
// const ageChris = now - 1991;
// const ageSarah = now - 2018;
// console.log(now - 1991 > now - 2018)

// let x, y;

// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageChris + ageSarah) / 2;
// console.log(ageChris, ageSarah, averageAge);  

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`

// console.log(jonas)

// const age = 15;

// if (age >= 18) {
//    console.log('Sarah can start driving')
// } else {
//    const yearsLeft = 18 - age;
//     console.log(`Sarah cannot drive yet! Wait another ${yearsLeft} Years.`)
// };

// const birthYear = 1991;
// let century;

// if(birthYear <= 2000) {
//    century = 20;
// } else {
//    century = 21;
// }

// console.log(century);

// // type conversion
// const inputYear = '1991';
// console.log(Number(inputYear) + 18);
// console.log(inputYear + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log('I am ' + 23 + ' years old')
// console.log('23' - '10' - 3);
// console.log('23' + '10' + 3);
// console.log('23' * '2');
// console.log('23' / '2');

// five falsy values: 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 1000000;
// if(money) {
//    console.log(`Don't spend it all`)
// } else {
//    console.log(`You should get a job!`)
// }

// let height;
// if(height) {
//    console.log(`yay height is defined`)
// } else {
//    console.log(`height is undefined`)
// }

// const age = 18;
// if(age === 18) console.log('you just became an adult');

// console.log('18' == 18); //(loose)avoid //true// uses type coercion
// console.log('18' === 18); //(strict)use //false// doesn't use it

// const favorite = Number(prompt(`What's your favorite number???`));
// console.log(favorite);
// console.log(typeof favorite);

// if (favorite === 23) {
//    console.log(`Cool! 23 is an amazing number!`)
// } else if(favorite === 7) {
//    console.log(`7 is also a cool number`)
// } else if(favorite === 11) {
//    console.log(`11 is also a cool number`)
// } else {
//    console.log(`number is NOT COOL`)
// }

// // if(favorite !== 23) console.log('why not 23 tho????')

// const hasDriversLicense = true; // A
// const hasGoodVision = true;  // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);


// // if(hasDriversLicense && hasGoodVision) {
// //    console.log('Sarah is able to drive!')
// // } else {
// //    console.log(`someone else should drive`)
// // }

// const isTired = true; // C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// if(hasDriversLicense && hasGoodVision && !isTired) {
//    console.log('Sarah is able to drive!');
// } else {
//    console.log(`someone else should drive`);
// }

const day = 'Saturday';

switch(day) {
   case 'Monday': // day === 'Monday'
      console.log('Plan course structure');
      console.log('Go to coding meetup');
      break;
   case 'Tuesday':
      console.log(`Prepare theory videos`);
      break;
   case 'Wednesday':
   case 'Thursday':
      console.log(`Write code examples`);
      break;
   case 'Friday':
      console.log(`Record Videos`);
      break;
   case 'Saturday':
   case 'Sunday':
      console.log('Enjoy the weekend!!!!!');
      break;
   default:
      console.log('Not a valid day!');
}

if(day === 'Monday') {
   console.log('Plan course structure');
   console.log('Go to coding meetup');
} else if(day === 'Tuesday') {
   console.log(`Prepare theory videos`);
} else if(day === 'Wednesday' || day === 'Thursday') {
   console.log(`Write code examples`);
} else if(day === 'Saturday' || day === 'Sunday') {
   console.log('Enjoy the weekend!!!!!');
} else {
   console.log('Not a valid day!');
}