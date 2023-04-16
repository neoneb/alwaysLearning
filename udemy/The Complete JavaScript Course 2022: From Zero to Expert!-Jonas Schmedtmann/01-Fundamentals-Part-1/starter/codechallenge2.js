const markWeight1 = 78;
const markHeight1 = 1.69;
const johnWeight1 = 92;
const johnHeight1 = 1.95;
const markWeight2 = 95;
const markHeight2 = 1.88;
const johnWeight2 = 85;
const johnHeight2 = 1.76;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

//1. 2.
if (markBMI1 > johnBMI1) {
   console.log(`Mark's BMI of (${markBMI1.toFixed(1)}) is higher than John's BMI(${johnBMI1.toFixed(1)}).`);
} else {
   console.log(`Johns's BMI of (${johnBMI1.toFixed(1)}) is higher than Marks's BMI(${markBMI1.toFixed(1)}).`);
}

if (markBMI2 > johnBMI2) {
   console.log(`Mark's BMI of (${markBMI2.toFixed(1)}) is higher than John's BMI(${johnBMI2.toFixed(1)}).`);
} else {
   console.log(`Johns's BMI of (${johnBMI2.toFixed(1)}) is higher than Marks's BMI(${markBMI2.toFixed(1)}).`);
}

