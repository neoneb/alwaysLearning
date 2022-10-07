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
// const jonasArray = [
//    `Jonas`,
//    `Jameson`,
//    2037 - 1991,
//    `teacher`,
//    [`Michael`, `Peter`, `Steven`]
// ]
// console.log(jonasArray)

// const jonas = {
//    firstName: `Jonas`,
//    lastName: `Jameson`,
//    age: 2037 - 1991,
//    job: `Teacher`,
//    friends: [`Michael`, `Peter`, `Steven`]
// }
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas[`lastName`]);

// const nameKey = 'Name';
// console.log(jonas[`first` + nameKey]);
// console.log(jonas[`last` + nameKey]);

// const interestedIn = prompt(`What do you want to know about Jonas?  Choose between firstName, lastName, age, job, and friends`);

// if(jonas[interestedIn]) {
//    console.log(jonas[interestedIn]);
// } else {
//    console.log(`Wrong Request!`)
// }

// jonas.location = `Portugal`;
// jonas[`twitter`] = `@jonasS`;

// console.log(jonas);

// // Challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is named ${jonas[`friends`][0]}`)

// const jonas = {
//    firstName: `Jonas`,
//    lastName: `Jameson`,
//    birthYear: 1991,
//    job: `Teacher`,
//    friends: [`Michael`, `Peter`, `Steven`],
//    hasDriversLicense: true,
//    // calcAge: function(birthYear) {
//    //    return 2037 - birthYear;
//    // },
//    // calcAge: function() {
//    //    // console.log(this);
//    //    return 2037 - this.birthYear;
//    // }
//    calcAge: function() {
//       // console.log(this);
//       this.age = 2037 - this.birthYear;
//       return this.age;
//    },
//    getSummary: function() {
//       return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? `a` : `no`} Driver's License`
//    }
// };

// console.log(jonas);
// console.log(jonas.calcAge());
// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// // Challenge
// console.log(jonas.getSummary());

// console.log(`Lifting weights repetition 1`)
// console.log(`Lifting weights repetition 2`)
// console.log(`Lifting weights repetition 3`)
// console.log(`Lifting weights repetition 4`)
// console.log(`Lifting weights repetition 5`)
// console.log(`Lifting weights repetition 6`)
// console.log(`Lifting weights repetition 7`)
// console.log(`Lifting weights repetition 8`)
// console.log(`Lifting weights repetition 9`)
// console.log(`Lifting weights repetition 10`)

// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++) {
//    console.log(`Lifting weights repetition ${rep}`)
// }

// const jonasArray = [
//    `Jonas`,
//    `Jameson`,
//    2037 - 1991,
//    `teacher`,
//    [`Michael`, `Peter`, `Steven`],
//    true
// ];
// const types = [];

// for(let i = 0; i < jonasArray.length; i++) {
// // reading from jonasArray
//    console.log(jonasArray[i], typeof jonasArray[i]);

// // filling types array
//    // types[i] = typeof jonasArray[i];
//    types.push(typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i = 0; i < years.length; i++) {
//    ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and break
// console.log(`---------- ONLY STRINGS ------------`)
// for (let i = 0; i < jonasArray.length; i++) {
//    if (typeof jonasArray[i] !== 'string') continue;
//    console.log(jonasArray[i], typeof jonasArray[i]);
// }

// console.log(`---------- BREAK WITH NUMBER ------------`)
// for (let i = 0; i < jonasArray.length; i++) {
//    if (typeof jonasArray[i] === 'number') break;
//    console.log(jonasArray[i], typeof jonasArray[i]);
// }

// LOOPING BACKWARDS
// const jonasArray = [
//    `Jonas`,
//    `Jameson`,
//    2037 - 1991,
//    `teacher`,
//    [`Michael`, `Peter`, `Steven`],
// ];

// for(let i = jonasArray.length - 1; i >= 0; i--) {
//    console.log(i, jonasArray[i]);
// }

// // LOOP INSIDE OF A LOOP

// for (let exercise = 1; exercise < 4; exercise++) {
//    console.log(`----------Starting exercise ${exercise}`);

//    for (let rep = 1; rep < 6; rep++) {
//       console.log(`Exercise ${exercise}: lifting weights repetition ${rep}`);
//    }
// }

// for (let rep = 1; rep <= 10; rep++) {
//    console.log(`FOR: Lifting weights repetition ${rep}`)
// }

// let rep = 1;
// while (rep <= 10) {
//    console.log(`WHILE: Lifting weights repetition ${rep}`);
//    rep++;
// }

// let dice = Math.floor((Math.random(1) * 6) + 1);

// while(dice !== 6) {
//    console.log(`'You rolled a ${dice}'`)
//    dice = Math.floor((Math.random(1) * 6) + 1);
//    if (dice === 6) console.log(`Loop is about to end..`)
// }