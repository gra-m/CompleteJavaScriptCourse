"use strict";
// Example 1
let f;
const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}

const h = function() {
    const b = 777;
    f = function() {
        console.log(b * 2);
    }
}



g(); //g gives birth to f and disappears off of the call stack.

f(); // f remebers the variable environment of its birthplace

console.dir(f)


h();// re-assigns f funcion

f();

console.dir(f)

// Example 2

const boardPassengers = function(n, wait) {
    const perGroup = n / 3;
    console.log(`Will start boarding in ${wait} seconds`);

    setTimeout(function () {
        console.log(
            `We are now boarding all ${n} 
passengers`);
        console.log(
            `There are 3 groups, each with ${perGroup}
passengers`);
    }, wait * 1000);

};

const perGroup = 1000; // if the scope chain had priority over function this perGroup Fvariable
// would be
// used.
boardPassengers(18, 3);
