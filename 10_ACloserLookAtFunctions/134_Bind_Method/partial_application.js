"use strict";
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

// Using bind allows you to bind a specific this to a function

const bookLT = lufthansa.book.bind(lufthansa);
const bookEW = lufthansa.book.bind(eurowings);
const bookSA = lufthansa.book.bind(swiss);

bookLT(123, 'Johnnie Walker');
bookEW(456, 'Grant Bells');
bookSA(789, 'The Glenlivet');

//console.log(lufthansa, eurowings, swiss);

// Then you can even create for specific flights, or customers, (would need to change param order)

const bookLT123 = lufthansa.book.bind(lufthansa, 123);
const bookEW456 = lufthansa.book.bind(eurowings, 456);
const bookSA789 = lufthansa.book.bind(swiss, 789);

bookLT123("Jumanj Ishtari");
bookEW456("Hola Sombrero");
bookSA789("Ishmael Ignatius");

console.log(lufthansa, eurowings, swiss);

// USEFUL with EVENT LISTENERS

lufthansa.planes = 300; // add planes property
lufthansa.buyPlane = function () { // add method
    this.planes++;
    console.log('here it is', this.planes);
}


// In an event handler function the this belongs to element it is attached to.
/*document.querySelector('.buy').addEventListener
('click', lufthansa.buyPlane);*/

// The above fails until it is bound to the this of the caller you wish:
document.querySelector('.buy').addEventListener // CLICK BUY..
('click', lufthansa.buyPlane.bind(lufthansa));


// Partial Application presetting parameters:

const addTax = (rate, value)  => value + value * rate;
console.log(addTax(.1, 200));

// We have no specific object, hence 'null', but the VAT rate is set automatically:
const addVAT = addTax.bind(null, 0.23);


console.log(addVAT(200));

// Copying methods with some of their parameters partially applied saves time.
// Alternatively you'd have to have a function return a function:

const originalTaxFunction = function (rate) {
    return function returnedTF (value)
    {
        return value + value * rate;
    };
}



const returnedFunction = originalTaxFunction()
