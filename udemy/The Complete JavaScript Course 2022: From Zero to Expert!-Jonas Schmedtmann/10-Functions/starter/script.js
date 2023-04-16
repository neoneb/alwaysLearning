'use strict';

// const bookings = [];

// const createbooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 199 * numPassengers
// ) {
//   //   ES5
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createbooking('LH123');
// createbooking('LH123', 2, 800);
// createbooking('LH12233', 2);
// createbooking('LH12233', 2, 500);

// createbooking('LH122232333', undefined, 1000);

// const flight = 'LH234';

// const jonas = {
//   name: 'Chris Cormier',
//   passport: 2342423423,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH998';
//   passenger.name = 'mr. ' + passenger.name;

//   if (passenger.passport === 2342423423) {
//     alert('Check in');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 10000000000);
// };

// newPassport(jonas);
// checkIn(flight, jonas);

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// //  JS uses callbacks all the time
// const high5 = function () {
//   console.log('HI');
// };

// document.body.addEventListener('click', high5);

// ['jonas', 'Martha', 'Adam'].forEach(high5);

// const greet = greeting => name => console.log(`${greeting} ${name}`);
// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Steven');

// greet('Hello')('Jonas');

const airCanada = {
  airline: 'Air Canada',
  iataCode: 'AC',
  bookings: [],
  // book: function() {}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

airCanada.book(239, 'Chris cormier');
airCanada.book(444, 'John Smith');
console.log(airCanada);

const westJet = {
  airline: 'West Jet',
  iataCode: 'WJ',
  bookings: [],
};

const book = airCanada.book;

// DOES NOT WORK
// book(23, 'Sara James');

// Call Method
book.call(westJet, 23, 'Sarah Williams');
console.log(westJet);

book.call(airCanada, 239, 'Mary Cooper');
console.log(airCanada);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 583, 'Jon Jeej');
console.log(swiss);

// Apply Method
const flightData = [583, 'George boy'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method

const bookWJ = book.bind(westJet);
const bookAC = book.bind(airCanada);
const bookSA = book.bind(swiss);

bookWJ(23, 'Steven Williams');
console.log(westJet);

const bookEW23 = book.bind(westJet, 23);
bookEW23('Chris Cormier');
bookEW23('Martha Stewart');

// With Event Listeners
airCanada.planes = 300;
airCanada.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
// airCanada.buyPlane();
document
  .querySelector('.buy')
  .addEventListener('click', airCanada.buyPlane.bind(airCanada));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (rate, value) => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(33));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

const runOnce = function () {
  console.log('This will never run again');
};

runOnce();

(function () {
  console.log('This will never run again');
})();

(() => console.log('This will never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Example 1

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 7;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

// Re-assigning f function
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
