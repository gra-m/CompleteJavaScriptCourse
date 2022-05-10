"use strict";

//IIFE
(function() {
    console.log('This will never run again');
    const isPrivate = 23; // encapsulated within this one use function
})();

console.log(isPrivate)

// function with no name in parentheses and then called immediately()

(() => console.log('This will ALSO never run again'))();


{
    let isPrivate2 = 23;
}

console.log(isPrivate2); // but since es6 IIFE are not needed for encapsulation.

// Just used when you need to invoke a function just once.
