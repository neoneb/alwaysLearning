// Very simple, given an integer or a floating-point number, find its opposite.

function opposite(n) {
  return n <= 0 ? Math.abs(n) : n * -1;
}

// Best Solution
// function opposite(n) {
//   return -n;
// }

console.log(opposite(0));
console.log(opposite(-23423.23523));
console.log(opposite(234232426.2345234));
console.log(opposite(4));
console.log(opposite(-11));
console.log(opposite(345345345));
