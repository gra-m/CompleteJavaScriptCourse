"use strict";

// Getters and Setters used for validation are properties, not methods, they cannot be called
// from constructor.

class Account{
    constructor(ownerNickName, movements, ownerFullName) {
        this.ownerNickName = ownerNickName;
        this.movements = movements;
        this.ownerFullName = ownerFullName;
    }

    // slice(-1) == copy array .pop removes and returns it
    get latest() {
        return this.movements.slice(-1).pop();
    }

    set latest(latestMovement) {
        this.movements.push(latestMovement);
    }

    set ownerFullName(name) {
        if(name.includes(' '))
            this._ownerFullName = name; // Stops infinite loop _
        else alert(`${name} is not a full name`);
    }

    get ownerFullName() {
        return this._ownerFullName; //getter required to return correct property
    }
}

const account1 = new Account('Fudge-Free', [200, 530, 120, 300], 'Freddie Nielsen');

// Getters and setters are just properties:

// No calling but this returns logic of getter:
console.log(account1.latest);

// Setters set like properties, not called like methods
account1.latest = 50;



console.log(account1.movements);

account1.ownerFullName = 'Sidney Sneed';

account1.ownerFullName = 'Wiggle Wendy';

//Adding Static Methods:
 //1: To constructor functions:

const PersonA = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

// adding a calcAge INSTANCE method to PersonA object.prototype An Instance Method.
PersonA.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

// adding a hey STATIC method to PersonA:

PersonA.hey = function() {
    console.log('Hey static')
}

// note the above is not added to the prototype, this is how it is NOT
// available to  instances. To add a static method to ES6 class use static
// keyword


const numberOne = new PersonA('firstName', 1926);

const numberTwo = new PersonA('myFirstName', 1956);

numberOne.calcAge();
numberTwo.calcAge();

//numberOne.hey(); // not available in instance..

PersonA.hey();




