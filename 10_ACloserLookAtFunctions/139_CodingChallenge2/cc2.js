"use strict";
///////////////////////////////////////
// Coding Challenge #2

/*
This is more of a thinking challenge than a coding challenge 🤓
Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!
And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.
GOOD LUCK 😀
*/
const body = document.querySelector('body');

(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
    body.addEventListener('click', function() {
        if (header.style.color === 'red')
        header.style.color ='blue';
        else
            header.style.color ='red';
    });
})();

//The Immediately Invoked Function Expression disappears off of the
//call stack as soon as it is executed. The event handler function
// lives on in its event listener and still has access to the
// variable environment of its birth (header.)






