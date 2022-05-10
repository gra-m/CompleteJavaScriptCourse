"use strict";
/*
Use a constructor function -> Car/make/speed
Implement accelerate method, increases cars speed by 10 and logs new speed to console.
Implement brake method, decreases speed speed by 5 and logs new speed to console.
Creat 2 car objects and experiment calling brake and accelerate multi times.
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

car1.accelerate();
car1.brake();
car1.brake();

car2.brake();
car2.brake();
car2.accelerate();
