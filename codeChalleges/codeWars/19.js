// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(text) {
  var text_len = text.length;
  if (text_len % 2 != 0) {
    let start = (text_len - 1) / 2;
    return text.slice(start, start + 1);
  } else {
    let start = text_len / 2 - 1;
    return text.slice(start, start + 2);
  }
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));
console.log(getMiddle('middle'));
console.log(getMiddle('A'));
