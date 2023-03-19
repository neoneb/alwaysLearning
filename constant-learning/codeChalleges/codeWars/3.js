// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

function positiveSum(arr) {
  let positiveNums = arr.filter((num) => num > 0);
  let sum = positiveNums.reduce((acc, cur) => acc + cur, 0);
  return sum;
}

console.log(positiveSum([-1, 3, 4, -5, 3]));
