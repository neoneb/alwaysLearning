// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

function bmi(weight, height) {
  const calcBmi = weight / Math.pow(height, 2);

  if (calcBmi <= 18.5) return 'Underweight';
  if (calcBmi <= 25.0) return 'Normal';
  if (calcBmi <= 30.0) return 'Overweight';

  return 'Obese';
}

console.log(bmi(80, 1.8));
