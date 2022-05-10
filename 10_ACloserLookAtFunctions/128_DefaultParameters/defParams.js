"use strict";

// remember falsy values == 0, '', undefined, null, NaN
//

// ES5 Way:
const bookings = [];

const createBooking = function (flightNum,
                                numPassengers,
                                price) {
    numPassengers = numPassengers || 250; // shortcircuits to passed param if present
    price = price || 340; // if price is falsy default param is used.

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('ES5123');


// ES6 Way:

const bookings1 = [];

const createBooking1 = function (flightNum,
                                numPassengers = 250,
                                price = 45) {
    const booking1 = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking1);
    bookings1.push(booking1);
}

createBooking1('ES6123');
createBooking1('ES6456', 10, 140);
