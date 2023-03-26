// understanding the problem///////////////////////////
// - Array transformed to string, separated by ...
// -What is the X days? Answer index + 1

// breaking up the problem into solutions/////////////////
// - Transform array into string
// - Transform each element to string with °C
// -String needs to contain day (index + 1)
// - Add .... between elements at start and end of string

const temp1 = [17, 21, 23];
const temp2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let dailyForecast = [];
  let maxTemps = arr.sort((a, b) => a - b);
  for (i = 0; i < maxTemps.length; i++) {
    dailyForecast.push(`${maxTemps[i]}°C in ${i + 1} days`);
  }
  let convertString = dailyForecast.toString();
  let finalString = convertString.replaceAll(',', ' .... ');
  finalString = `.... ${finalString} ....`;
  return finalString;
};

console.log(printForecast(temp2));
