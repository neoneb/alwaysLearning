// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(n) {
  let nums = n.split(' ').map(Number);
  const max = nums.reduce((a, c) => (c > a ? c : a));
  const min = nums.reduce((a, c) => (c < a ? c : a));
  return `${max} ${min}`;
}

console.log(highAndLow('1 2 3 4 5'));
console.log(highAndLow('1 2 -3 4 5'));
console.log(highAndLow('1 9 3 4 -5'));
console.log(highAndLow('-1111 69696 -34534 -456 1 4 10 8 2354235'));
