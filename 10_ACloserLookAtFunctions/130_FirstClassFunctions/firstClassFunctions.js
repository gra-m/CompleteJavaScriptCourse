"use strict";
//Supporting First Class Functions means JS treats functions as first class citizens
// they are simply VALUES
// they are just another type of OBJECT


// SO functions can be stored variables
const add = (a, b) => a + b;

// or object properties:
const counter = {
    value:  23,
    increment: function() { // object method
        this.value++;
    }
}

// and pass functions as arguments to other functions:

const btnClose = document.querySelector('#close');

const greet = () => console.log("Hey there!");
btnClose.addEventListener('click', greet); // === higher order function
// 'greet' is the callback function.


// You can even RETURN a function from another function.

// no example yet.


//As functions are objects (containing methods) you can call methods on a function:

/*counter.inc.bind(someOtherObject);*/


// Because JS has the feature of first class functions it means
// HIGHER ORDER FUNCTIONS === a function that receives another function as an argument
// OR returns a function or both CAN EXIST.

function count() {
    let counter = 0;
    return function () {
        counter++;
    };
}




