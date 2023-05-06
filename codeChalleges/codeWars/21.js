// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  return s.split(' ').reduce((acc, cur) => {
    return acc.length < cur.length ? acc : cur;
  }).length;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
console.log(
  findShort('urns out random test cases are easier than writing out basic ones')
);
console.log(findShort("Let's travel abroad shall we"));
console.log(findShort(''));
