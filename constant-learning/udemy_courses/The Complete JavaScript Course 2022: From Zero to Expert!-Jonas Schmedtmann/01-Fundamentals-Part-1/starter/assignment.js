//LECTURE: Values and Variables
//1.
const country = 'Canada';
const continent = 'North America';
const population = '38 Million';

//2.
console.log(country, continent, population);

// LECTURE: Data Types
//1.
const isIsland = false;
var language;

//2.
console.log(isIsland, population, country, language)

//LECTURE: let, const and var
//1.
const language = 'English;'

//2.
const country = 'Canada';
const continent = 'North America';
let population = 38000000;
const isIsland = false;

//3.
// continent = 'South America';
console.log(continent)

//LECTURE: Basic Operators

//1.
 splitPopulation = population / 2;

//2.
population++;
console.log(population);

//3.
const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

//4.
const averagePopulation = 33000000;
console.log(population < averagePopulation);

//5.
// const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;
// console.log(description);

// LECTURE: Strings and Template Literals
//1.
const description = `${country} is in ${continent}, and its ${population} people speak ${language}`;

//LECTURE: Taking Decisions: if / else Statements
//1. 
if (population > averagePopulation) {
   console.log(`${country}'s population is above average`)
} else {
   console.log(`${country}'s population is below average`)
}

//2. (Changed to below average in this scenario)

//LECTURE: Type Conversion and Coercion
//1. 2.
'9' - '5'; // 4
'19' - '13' + '17'; // 617
'19' - '13' + 17; // 23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; // 1143

//LECTURE: Equality Operators: == vs. ===
//1.
let numNeighbors = Number(prompt('How many neighbor countries does your country have?'))

//2. 3. 4. 5.
if (numNeighbors === 1) {
   console.log(`Only 1 border!?`);
} else if (numNeighbors > 1) {
      console.log(`wow more than one neighbor?`);
} else {
   console.log(`no neighbors?, how lonely`)
}
     
//6. the prompt is taking in a string, == will use type coercion to make the string a number but === will not. So in the case of === and the string is not converted to a number it will fail the parameters and move to else

//7. convert the input to a number on entry will make both the loose and strict comparisons work

//8. We should use === in the scenario because it is more strict in how it works and will result in cleaner code and is better in practice

//LECTURE: Logical Operators
//1. ok!

//2.
const language = 'English;'
let population = 38000000;
const isIsland = false;

//3. 4.
if(language && population < 50000000 && isIsland) {
   console.log(`Sarah would love to live in Canada`)
} else {
   console.log(`You should live in Portugal`)
}

//5. done

// LECTURE: The switch Statement
//1.