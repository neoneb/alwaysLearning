// 1.
dolphinsAvgScore = ((96 + 108 + 89) / 3).toFixed(0);
koalasAvgScore = ((88 + 91 + 110) / 3).toFixed(0);

console.log(dolphinsAvgScore, koalasAvgScore);

// 2. Result: Dolphins win! They have the higher average Score
if(dolphinsAvgScore > koalasAvgScore) {
   console.log(`Dolphins win! They have the higher average Score`)
} else if(dolphinsAvgScore === koalasAvgScore) {
   console.log(`it's a tie!`)
} else {
   console.log(`Koalas win! They have the higher average Score`)
}

// 3. Result: Koalas win! They have the higher average Score
dolphinsAvgScore = ((97 + 112 + 101) / 3).toFixed(0);
koalasAvgScore = ((109 + 95 + 123) / 3).toFixed(0);
console.log(dolphinsAvgScore, koalasAvgScore);

if(dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
   console.log(`Dolphins win! They have the higher average Score`)
} else if(koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
   console.log(`Koalas win! They have the higher average Score`)
} else if(dolphinsAvgScore === koalasAvgScore) {
   console.log(`it's a tie!`)
} else {
   console.log(`Neither team met the criteria resulting in a draw`)  
}

// 4. Result: it's a tie!
dolphinsAvgScore = ((97 + 112 + 101) / 3).toFixed(0);
koalasAvgScore = ((109 + 95 + 106) / 3).toFixed(0);
console.log(dolphinsAvgScore, koalasAvgScore);

if(dolphinsAvgScore > koalasAvgScore && dolphinsAvgScore >= 100) {
   console.log(`Dolphins win! They have the higher average Score`)
} else if(koalasAvgScore > dolphinsAvgScore && koalasAvgScore >= 100) {
   console.log(`Koalas win! They have the higher average Score`)
} else if(dolphinsAvgScore === koalasAvgScore &dolphinsAvgScore >= 100 && koalasAvgScore >= 100) {
   console.log(`it's a tie!`)
} else {
   console.log(`Neither team met the criteria resulting in a draw`)  
}