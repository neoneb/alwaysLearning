'use strict';

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log(`I can drive:D`)

// const interface = 'Audio';
// const private = 543;
// const if = true;

// function logger() {
//    console.log(`My name is Chris`)
// }
// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//    return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// const num = Number(`23`);
// console.log(num);

// // FUNCTION DECLARATION
// function calcAge1(birthYear) {
//    return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // FUNCTION EXPRESSION
// const calcAge2 = function (birthYear) {
//    return 2037 - birthYear;
// }

// const age2 = calcAge2(1992);
// console.log(age1, age2);

// Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1995);
// console.log(age3);

// const yearsUntilRetirement = (birthYear ,firtName) => {
//    const age = 2037 - birthYear;
//    const retirement = 65 - age;
//    // return retirement;
//    return `${firtName} retires in ${retirement} years!!`
// }
// console.log(yearsUntilRetirement(2022, `Jimbo`));
// console.log(yearsUntilRetirement(1980, `Cledus`));

// function cutFruitPieces(fruit) {
//    return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//    const applePieces = cutFruitPieces(apples);
//    const orangePieces = cutFruitPieces(oranges);
//    const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//    return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function(year) {
//    return 2037 - year;
// }

// const yearsUntilRetirement = (birthYear ,firstName) => {
//    const age = calcAge(birthYear);
//    const retirement = 65 - age;
//    if(retirement > 0) {
//       console.log(`${firstName} retires in ${retirement} years!!`);
//       return retirement;
//    } else {
//       console.log(`${firstName} has already retired`);
//       return -1;
//    }
// }

// console.log(yearsUntilRetirement(1991, `Chris`));
// console.log(yearsUntilRetirement(1950, `Mike`));

// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

// const friends = [`Michael`, `Steven`, `Peter`]
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);
// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = `Jay`;
// console.log(friends);
// // friends = [`bob`, `alice`]; //cannot do

// const jonas = [`Jonas`, `jamerson`, 2037 - 1991, `teach`, friends];
// console.log(jonas);
// console.log(jonas.length);

// // Exercise
// const calcAge3 = (birthYear) => 2037 - birthYear;

// const years1 = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge3(years1[0]);
// const age2 = calcAge3(years1[1]);
// const age3 = calcAge3(years1[years1.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge3(years1[0]), calcAge3(years1[1]), calcAge3(years1[years1.length - 1])];
// console.log(ages);

// // Add Elements
// const friends = [`Michael`, `Steven`, `Peter`]
// const newLength = friends.push(`Jay`);
// console.log(friends);
// console.log(newLength);

// friends.unshift(`John`);
// console.log(friends);

// // Remove elements
// friends.pop(); //Last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf(`Steven`)); //returns element index location
// console.log(friends.indexOf(`Bob`));

// friends.push(23);
// console.log(friends.includes(`Michael`));
// console.log(friends.includes(`Bob`));
// console.log(friends.includes(`23`));

// if (friends.includes(`Steven`)) {
//    console.log(`You have a friends named Steven!`)
