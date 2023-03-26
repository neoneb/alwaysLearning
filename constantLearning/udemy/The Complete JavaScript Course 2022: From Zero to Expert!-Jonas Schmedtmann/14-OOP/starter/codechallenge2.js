// 1.

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    console.log((this.speed += 10));
  }

  brake() {
    console.log((this.speed -= 10));
  }
  // 2.

  get speedUS() {
    return this.speed / 1.6;
  }
  // 3.
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}
// 4.
const ford = new CarCl('Ford', 120);

console.log(ford.speedUS);
ford.accelerate();
ford.accelerate();
ford.accelerate();
ford.accelerate();

ford.speedUS = 50;
console.log(ford);
