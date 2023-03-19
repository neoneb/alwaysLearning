// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

// Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)

// Note: The function accepts an integer and returns an integer.

// Happy Coding!

// function squareDigits(num) {
//   let numStr = num.toString();
//   let squaredNumStr = '';

//   for (let i = 0; i < numStr.length; i++) {
//     let digit = parseInt(numStr[i]);
//     digit = Math.pow(digit, 2);
//     squaredNumStr += digit.toString();
//   }
//   let squaredNum = parseInt(squaredNumStr);
//   return squaredNum;
// }

function squareDigits(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .map((digit) => Math.pow(parseInt(digit), 2))
      .join('')
  );
}

console.log(squareDigits(235235));
console.log(squareDigits(999999));
console.log(squareDigits(6796796));
