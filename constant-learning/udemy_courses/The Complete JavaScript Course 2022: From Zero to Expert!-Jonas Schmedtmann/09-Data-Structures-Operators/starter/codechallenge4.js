document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const textArea = document.querySelector('textarea');
const btn = document.querySelector('button');

//need a function that takes input of text area and console logs it to camel case
//need to clear the text area after button is clicked
// need to take list and separate items into any array. and then loop over array with current function

btn.addEventListener('click', () => {
  inputArray = textArea.value.split('\n');
  let i = 0;
  for (let item of inputArray) {
    i += 1;
    item = item.trim().toLowerCase().split('_');
    item[1] = item[1].charAt(0).toUpperCase() + item[1].slice(1);
    result = item.join('');
    console.log(result.padEnd(20) + '✅'.repeat(i));
  }
});
