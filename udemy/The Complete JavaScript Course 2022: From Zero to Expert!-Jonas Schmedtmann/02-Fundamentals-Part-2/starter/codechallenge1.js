// 1.
const calcAverage = (a, b, c) => Number(((a + b + c) / 3).toFixed(1));


// 2.
const dolphinAvg1 = calcAverage(44, 23, 71);
const koalasAvg1 = calcAverage(65, 54, 49);
const dolphinAvg2 = calcAverage(85, 54, 41);
const koalasAvg2 = calcAverage(23, 34, 27);

console.log(dolphinAvg1, koalasAvg1);
console.log(dolphinAvg2, koalasAvg2)

// 3.
const checkWinner = (dolphins, koalas) => {
   if (dolphins >= 2 * Number(koalas)) {
    console.log(`Dolphins win (${dolphins} to ${koalas})`);
   } else if
      (koalas >= 2 * Number(dolphins)) {
      console.log(`Koalas win (${koalas} to ${dolphins})`);
   } else {console.log(`NO CONTEST!!`)
}
};

// 4.
checkWinner(dolphinAvg1, koalasAvg1);
checkWinner(dolphinAvg2, koalasAvg2);

//5. ok