"use strict";
const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function() {
        console.log(this);
        console.log(2037 - this.year);
    },
    greet: () =>  {
        console.log(this);
        console.log(`Hey ${this.firstName}`);
    },
}

jonas.greet();/*this keyword is parents this on arrow func = window*/

// now give window a value for firstName by using var (DON't Do this):

var firstName = 'Matilda';

jonas.greet();

// Functions in objects are methods.
// Normally declared methods inherit the this of the object/caller.
// Don't use Arrow Functions to make methods, as their this will be the parent 'window' object
// not the object/caller.
// Do use arrow functions INSIDE object methods, because their this will be the methods this
// (the object/caller).


// OLD SOLUTION for PRESERVING This in OBJECT METHOD:
const onlyUseArrowInsideMethod = {
    firstName: 'useArrowInsideMethodOnly',
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);
        const self = this; // preserve this where it can be accessed..
        const isMillenial = function () {
            console.log('This is lost here, it is actually:\n window:', this);
            console.log(self);
            console.log(self.year >= 1981 && self.year <= 1996)
        }
        isMillenial();
    },
}

onlyUseArrowInsideMethod.calcAge();


// ES6 SOLUTION for PRESERVING This in OBJECT METHOD:

const onlyUseArrowInsideMethod1 = {
    firstName: 'useArrowInsideMethodOnly',
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year);
        const isMillenial = () => {
            console.log('This is kept as arrow inherits parent this:', this);
            console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial();
    },
}

onlyUseArrowInsideMethod1.calcAge();

// The arguments keyword, like the this keyword is not available in an arrow function:

const addExpr = function(a, b) {
    console.log(arguments)
    return a + b;
}

addExpr(2, 5, 8, 7);

const addArrow = (a, b) => {
    //console.log(arguments); // errors, arguments is not defined.
    return a + b;
}


addArrow(12, 87);

