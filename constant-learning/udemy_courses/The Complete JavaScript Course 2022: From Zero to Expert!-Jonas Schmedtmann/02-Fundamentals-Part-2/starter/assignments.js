// LECTURE: Functions
// 1.
function describeCountry(country, population, capitalCity) {
   return`${country} has ${population} million people and its capital city is ${capitalCity}.`
}

// 2.
const resultCanada = describeCountry(`Canada`, 38, `Ottawa`);
const resultChina = describeCountry(`China`, 800, `Beijing`);
const resultAustralia = describeCountry(`Australia`, 80, `Sydney`);

console.log(resultCanada, resultChina, resultAustralia);

// LECTURE: Function Declarations vs. Expressions
// 1. 2. 3.
function percentageOfWorld1(population) {
   return (population / 7900 * 100).toFixed(1) + '%'
}

const canadaPopCompare = percentageOfWorld1(38);
const chinaPopCompare = percentageOfWorld1(800);
const australiaPopCompare = percentageOfWorld1(80);


console.log(canadaPopCompare, chinaPopCompare, australiaPopCompare);

// 4.
const percentageOfWorld2 = function(population) {
   return (population / 7900 * 100).toFixed(1) + '%'
}

const canadaPopCompare = percentageOfWorld2(38);
const chinaPopCompare = percentageOfWorld2(800);
const australiaPopCompare = percentageOfWorld2(80);

console.log(canadaPopCompare, chinaPopCompare, australiaPopCompare);

// LECTURE: Arrow Functions
// 1. 
const percentageOfWorld3 = (population) =>  {
   return (population / 7900 * 100).toFixed(1) + '%'
}

const canadaPopCompare = percentageOfWorld3(38);
const chinaPopCompare = percentageOfWorld3(800);
const australiaPopCompare = percentageOfWorld3(80);

console.log(canadaPopCompare, chinaPopCompare, australiaPopCompare);

// LECTURE: Functions Calling Other Functions
// 1. 2. 3.
function percentageOfWorld1(population) {
   return (population / 7900 * 100).toFixed(1) + '%'
}

const describePopulation = (country, population) => {
   const percentage = percentageOfWorld1(population);
   return `${country} has ${population} million people, which is about ${percentage}`
}

console.log(describePopulation(`Canada`, 48));
console.log(describePopulation(`China`, 1400));
console.log(describePopulation(`Brazil`, 200));

// LECTURE: Introduction to Arrays
//1.
const populations = [38, 500, 15, 99];
console.log(populations);
console.log(populations[1]);

//2.
console.log(populations.length === 4);

//3.
function percentageOfWorld1(population) {
   return (population / 7900 * 100).toFixed(1) + '%'
}

const percentages = [
   percentageOfWorld1(populations[0]),
   percentageOfWorld1(populations[1]),
   percentageOfWorld1(populations[2]),
   percentageOfWorld1(populations[3])
];

console.log(percentages);


// LECTURE: Basic Array Operations (Methods)
// 1.
const neighbors = [`France`, `Ireland`, `Greece`]
console.log(neighbors);

// 2.
neighbors.push(`Utopia`);
console.log(neighbors);

// 3.
neighbors.pop();
console.log(neighbors);

// 4.
if (neighbors.includes(`Germany`)) {
} else{
   console.log(`Probably not a central European country!`);
}

// 5.
console.log(neighbors.indexOf(`Ireland`))
neighbors[1] = `Big Boy Ireland`;
console.log(neighbors);

// LECTURE: Introduction to Objects
// 1.
