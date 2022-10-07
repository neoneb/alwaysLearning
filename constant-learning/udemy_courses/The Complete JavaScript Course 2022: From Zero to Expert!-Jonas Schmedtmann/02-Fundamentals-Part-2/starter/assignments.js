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
const myCountry = {
   country: `Canada`,
   capital: `Ottawa`,
   language: `English`,
   population: 38,
   neighbors: [`USA!`, `USA!`, `USA!`]
}

console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation
// 1.
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbors.length} neighboring countries and the capital is ${myCountry.capital}`)

// 2.
myCountry.population += 2;
console.log(myCountry)

myCountry[`population`] -= 2;
console.log(myCountry)

// LECTURE: Object Methods
// 1. 3.
const myCountry = {
   country: `Canada`,
   capital: `Ottawa`,
   language: `English`,
   population: 38,
   neighbors: [],
   describe: function() {
      return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbors.length} neighboring countries and the capital is ${this.capital}`
   },
   checkIsland: function () {
      this.isIsland = this.neighbors.length === 0 ? true : false; 
      return this.isIsland;
   }
}
// 2.
console.log(myCountry.describe());

// 3.
console.log(myCountry.checkIsland());
console.log(myCountry);

// LECTURE: Iteration: The for Loop
// 1.
for (let voter = 1; voter <= 50; voter++) {
   console.log(`Voter number ${voter} is currently voting`)
}

// LECTURE: Looping Arrays, Breaking and Continuing
// 1.
const populations = [38, 500, 15, 99];

// 2.
const percentages2= []
for (let i = 0; i < populations.length; i++) {
percentages2.push((populations[i] / 7900 * 100).toFixed(1) + '%')
}
console.log(percentages2);

// 3. Confirmed matching

// LECTURE: Looping Backwards and Loops in Loops
// 1.
const listOfNeighbors = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden',
'Russia']];

// 2.
for(let i = 0; i < listOfNeighbors.length; i++)
   for(let y = 0; y < listOfNeighbors[i].length; y++) 
      console.log(`Neighbors: ${listOfNeighbors[i][y]}`);

// 3. k

// LECTURE: The while Loop
// 1.
const populations = [38, 500, 15, 99];
let i = 0

function percentageOfWorld1(population) {
   return (population / 7900 * 100).toFixed(1) + '%'
}

const percentages3= []
while (i < populations.length) {
   const perc = percentageOfWorld1(populations[i]);
   percentages3.push(perc);
   i++;
}

console.log(percentages3);


// 2. I believe I like the four loop more for this application because all the conditions are together instead of all separated out