// 1.
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const alteredJulia = dogsJulia.slice(1).slice(0, 2);

// 2.
const combinedDogs = alteredJulia.concat(dogsKate);
console.log(combinedDogs);

// 3.
combinedDogs.forEach(function (dog, i) {
  dog < 3
    ? console.log(`Dog number ${i + 1} is still a puppy🐕`)
    : console.log(
        `Dog number ${i + 1} is an adult, and is ${dog} years old 🐶`
      );
});

// 4.

// const dogsJulia = [9, 16, 6, 8, 3];
// const dogsKate = [10, 5, 6, 1, 4];

// const alteredJulia = dogsJulia.slice(1).slice(0, 2);

// const combinedDogs = alteredJulia.concat(dogsKate);
// console.log(combinedDogs);

// combinedDogs.forEach(function (dog, i) {
//   dog < 3
//     ? console.log(`Dog number ${i + 1} is still a puppy🐕`)
//     : console.log(
//         `Dog number ${i + 1} is an adult, and is ${dog} years old 🐶`
//       );
// });

//////////// JONAS SOLUTION
const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  dogs.forEach(function (dog, i) {
    dog < 3
      ? console.log(`Dog number ${i + 1} is still a puppy🐕`)
      : console.log(
          `Dog number ${i + 1} is an adult, and is ${dog} years old 🐶`
        );
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
