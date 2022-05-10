"use strict";

const slide = document.querySelector('.pic');
const imageSources = [
    'beforeSecureBookingsExecutionContextDisappears.jpg',
    '02_checkAndFlagPure_withoutMap.jpg',
    'nowhereToBeFound.jpg',
    'closure.jpg'];

let count = 0;
/*const nextImage = function() {
    count++;
    if (count < imageSources.length) {
        slide.setAttribute('src', imageSources[count]);
    }
    else {
        slide.setAttribute('src', imageSources[count = 0]);
    }
}*/

slide.addEventListener('click', () => {
    count++;
    if (count < imageSources.length) {
        slide.setAttribute('src', imageSources[count]);
    }
    else {
        slide.setAttribute('src', imageSources[count = 0]);
    }
});


///CLOSURES
const secureBooking = function() {
    let passengerCount = 0;
    return function() { //***birthplace of booker function.
        passengerCount++;
        console.log(`${passengerCount} passengers`)
    }
}

const booker = secureBooking();//


// What the code above does is basically ensure that the passengerCount variable is not on
// the call stack (once secureBooking has been called). Only secureBooking and booker functions
// are available in the Global Execution Context.

booker();
booker();
booker(); // So the fact that these increment passengerCount when it no longer exists
// on call stack is strange.. What makes this possible is a 'Closure'.
// A function remembers all of its component from its ***birthplace.

console.dir(booker);







