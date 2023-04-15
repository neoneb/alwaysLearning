// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
  return str.slice(1, -1);
}

console.log(removeChar('chris'));
console.log(removeChar('dog'));
console.log(removeChar('anteater'));
console.log(removeChar('jimbob'));
console.log(removeChar('cheese'));
console.log(removeChar('beefy'));
