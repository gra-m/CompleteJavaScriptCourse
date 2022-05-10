"use strict";
//Because js methods are just values they can be copied out of existing objects,
// but how do you make sure the right object is called when you've moved the method
// out of context?

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LT',
    bookings: [],
    //book: function () {}, // old way
    book(flightNum, name) {
        console.log(`${name} booked a flight on 
        ${this.airline} flight ${this.iataCode}${flightNum}`
        );
       this.bookings.push({flight: `${this.iataCode}${flightNum}`, name}); // creates booking object
    },
};


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
}

const swiss = {
    airline: 'Swiss Air',
    iataCode: 'SA',
    bookings: [],
}

lufthansa.book(239, 'John Midicman');
lufthansa.book(634, 'Fred Digbertus');
//console.log(lufthansa);

// So we have a perfectly good book(flightNum, name) but we want to use it for other airlines:

const book = lufthansa.book; // We don't have to move the function to top level, we can just
// save in 'book' variable.

// DOES NOT WORK --> in Strict mode a function's this is undefined.
/*book('123', "LostIt's This");
console.log(lufthansa); */

// SOLUTION --> use either call or apply, call covers everything as modern solution.

// make Functions call method make the call to book WITH explicit defined this:

book.call(eurowings, '678', 'Arnie Barnie');
book.call(eurowings, '890', 'Summy Elwe');
console.log(eurowings);
// so eurowings object is making use of embedded function in lufthansa

const flightBookingCameThroughAsArray = [583, 'George Cooper'];

book.apply(swiss, flightBookingCameThroughAsArray);
// apply old way to handle array.
console.log(swiss);

const modernWaySpreadArrayWithCall = [583, 'Wendy Wichards'];

book.call(swiss, ...modernWaySpreadArrayWithCall);
console.log(swiss);

