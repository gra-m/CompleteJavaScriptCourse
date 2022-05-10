"use strict";
// exactly same behaviour in Java: package oca.curiosities._129value_vs_reference;

// Both Java and JavaScript are Pass by Value. Languages like C are pass by reference.
const passengerObj = {
    name: 'Full Name',
    passPortNo: 2354532452345,
}
const flight = 'LM345';



const checkIn = function (flightNum, passenger) {
    flightNum = 'LM999'; // Fails primitive flightNum is completely different variable to 'flight'
    passenger.name = 'Mr. ' + passenger.name; // Works, passenger is ref to same object

    if(passenger.passPortNo === 2354532452345) {
        alert('Checked in')
    } else {
        alert('Wrong Passport')
    }
};

checkIn(flight, passengerObj);
console.log(flight);
console.log(passengerObj);

