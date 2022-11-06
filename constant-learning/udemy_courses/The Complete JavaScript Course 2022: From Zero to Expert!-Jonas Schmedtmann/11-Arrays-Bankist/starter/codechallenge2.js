// 1.
const calcAverageHumanAge = ages => {
  const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  // 2.
  const adults = humanAge.filter(toOld => toOld > 18);
  console.log(adults);
  // 3.
  const average = adults.reduce(
    (acc, cur, i, arr) => acc + cur / arr.length,
    0
  );
  // 2 3 (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
  return average;
};
// 4.
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);
