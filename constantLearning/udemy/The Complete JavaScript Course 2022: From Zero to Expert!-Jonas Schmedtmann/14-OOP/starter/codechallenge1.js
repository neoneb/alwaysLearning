// 1.
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
  //   console.log(this);
};

// 2.
Car.prototype.accelerate = function () {
  console.log((this.speed += 10));
};

// 3.
Car.prototype.brake = function () {
  console.log((this.speed -= 10));
};

// 4.
const bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

console.log(bmw, Mercedes);

Mercedes.brake();
Mercedes.accelerate();
Mercedes.accelerate();
Mercedes.accelerate();
bmw.brake();
bmw.accelerate();
bmw.accelerate();
bmw.accelerate();
bmw.brake();
