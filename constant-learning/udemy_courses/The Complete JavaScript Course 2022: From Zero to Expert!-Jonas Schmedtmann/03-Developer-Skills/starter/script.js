// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// // const x = 23;
// // const calcAge = (birthYear) => 2037 - birthYear;
// // console.log();

// const temperatures = [3, -2, -6, -1, `error`, 9, 13, 17, 15, 14, 9, 5];
// const temperatures1 = [20, -10, 5, -5, `error`, 9, 45, 18, 15, 6, 4];

// // 1. understanding the problem --------------
// // -What is temp amplitude? Answer: difference between highest and lowest temp
// // -How to compute max and min temps?
// // What's sensor error? And what to do when one occurs?

// // 2. Breaking up into sub-problems ---------------
// // - How to ignore errors?
// // -Find max value in temp array
// // -Find min value in temp array
// // - Subtract min from max(amplitude) and return it

// const calcTempAmplitude = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== `number`) continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitude(temperatures, temperatures1);
// console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: `type`,
    unit: `celsius`,
    value: Number(prompt(`degrees celsius:`)),
  };
  // B) Find the Bug
  console.log(measurement);
  console.table(measurement);
  console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

// a) Identify the bug
console.log(measureKelvin());
