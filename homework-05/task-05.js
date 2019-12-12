class Car {
  constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
    this._speed = speed;
    this._price = price;
    this._maxSpeed = maxSpeed;
    this._isOn = isOn;
    this._distance = distance;
  }

  static getSpecs(car) {
    return console.log(car);
  }

  get price() {
    return this._price;
  }

  set price(value) {
    this._price = value;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false;
    return (this._speed = 0);
  }

  accelerate(value) {
    if (value < this._maxSpeed) {
      this._speed += value;
    }
  }

  decelerate(value) {
    if (value > 0) {
      this._speed -= value;
      console.log(this._speed);
    }
  }

  drive(hours) {
    if (this._isOn === true) {
      console.log(this._distance);

      this._distance += hours * this._speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

// console.log(mustang)

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
