// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the
function likes(names) {
  const n = names.length;
  if (names.length === 0) {
    return 'no one likes this';
  } else if (n === 1) {
    return `${names[0]} likes this`;
  } else if (n === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (n === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else if (n >= 4) {
    return `${names[0]}, ${names[1]} and ${n - 2} others like this`;
  }
}

console.log(likes([]));
//-->  "no one likes this"

console.log(likes(['Peter']));
//-->  "Peter likes this"

console.log(likes(['Jacob', 'Alex']));
//-->  "Jacob and Alex like this"

console.log(likes(['Max', 'John', 'Mark']));
//-->  "Max, John and Mark like this"

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));
//-->  "Alex, Jacob and 2 others like this"
