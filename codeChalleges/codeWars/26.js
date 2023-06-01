// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

const removeFirstChar = (n) => n.split('').slice(0, 1);

function abbrevName(name) {
  const nameSplit = name.toUpperCase().split(' ');

  return `${removeFirstChar(nameSplit[0])}.${removeFirstChar(nameSplit[1])}`;
}

console.log(abbrevName('Sam Harris'));
console.log(abbrevName('Patrick Feenan'));
console.log(abbrevName('Evan Cole'));
console.log(abbrevName('P Favuzzi'));
console.log(abbrevName('David Mendieta'));
