"use strict";
/*
Use a constructor function -> Car/make/speed
Implement accelerate method, increases cars speed by 10 and logs new speed to console.
Implement brake method, decreases speed speed by 5 and logs new speed to console.
Creat 2 car objects and experiment calling brake and accelerate multi times.

//ADDITIONAL or coding challenge 3:
Use a cf -> ElectricCar/make/speed/currentcharge
Implement chargeBattery(chargeTo) that sets battery charge to chargeTo.
Implement accelerate that increases speed by 20 and
decreases charge by 1%.
Log: 'XXX is going at xxx km/h, with a charge of 22%'

 */

const Car = function (make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function() {
    console.log(this.make, ' Accelerating, new speed:', this.speed += 10);
}

Car.prototype.brake = function() {
    console.log(this.make, ' Braking, new speed:', this.speed -= 5);
}

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);


const ElectricCar = function (make, speed, currentCharge) {
    Car.call(this, make, speed);
    this.currentCharge = currentCharge;

}
// Add inheritance relationship before there are any additional methods, Object.create resets
// these to blank..
ElectricCar.prototype = Object.create(Car.prototype);
console.log(ElectricCar.prototype.constructor); // constructor currently set to car
ElectricCar.prototype.constructor = ElectricCar;
console.log(ElectricCar.prototype.constructor); // now correctly set to ElectricCar

// Now to add completely new function:

ElectricCar.prototype.chargeBattery = function(chargeTo) {
    console.log(`Battery charged to ${this.currentCharge = chargeTo}`)
}

// Create an EC
const electricCar1 = new ElectricCar('Tesla', 100, 50);
console.log(electricCar1);

// Now chargeBattery
electricCar1.chargeBattery(80);
console.log(electricCar1);

// Now to override parent functions:

ElectricCar.prototype.accelerate = function() {
    console.log(`${this.make} is going ${this.speed += 20} with a charge of ${this.currentCharge -= 1}%`);
}

electricCar1.accelerate();

car1.accelerate();
car1.brake();
car1.brake();

car2.brake();
car2.brake();
car2.accelerate();

electricCar1.brake();
electricCar1.brake();
electricCar1.brake();
electricCar1.accelerate();
