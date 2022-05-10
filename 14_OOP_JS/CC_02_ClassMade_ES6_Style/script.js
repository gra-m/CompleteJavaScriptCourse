"use strict";

/*
Recreate CC1 using an ES6 class  -> Car/make/speed
Implement accelerate method, increases cars speed by 10 and logs new speed to console.
Implement brake method, decreases speed speed by 5 and logs new speed to console.
Create 2 car objects and experiment calling brake and accelerate multi times.

2. Add a getter called 'speedUS' which returns the current speed in m/h (divide by 1.6)
3. Add a setter called speedUS which accepts m/h param but stores in km/h (mult by 1.6)
4. Create new car and experiment with acc, brake and get and setter.
 */

class Car {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    } // no need for commas


    accelerate() {
        console.log(this.speed += 10);
    }

    brake() {
        console.log(this.speed -= 5);
    }

    set speedUS(speedMPH) {
        console.log(`Vehicle speed set to ${speedMPH} m/ph ${this.speed = (speedMPH * 1.6)} k/ph`);
    }

    get speedUS() {
        let speedUS = this.speed / 1.6;
        console.log(`Vehicle speed converted to US is ${speedUS.toFixed(1)} m/ph`)
    }
}

const car1 = new Car('Robin Reliant', 50);

console.log(car1);

car1.accelerate();
car1.brake()
car1.speedUS = 43;
car1.speedUS
