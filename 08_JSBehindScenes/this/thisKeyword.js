"use strict";


/*Method this = Object calling method
* Simple function call this == undefined in strict Window object sloppy
* Arrow functions this belongs to surrounding lexical this
* EventListener this is DOM element that the handler is attached to
* LATER experience with this == see new, call, apply and bind*/


console.log('This in global scope:',  this); /*this in global scope == window object*/

const calcAgeExpr = function(birthYear) {
    console.log(2037 - birthYear);
    console.log(this); /*undefined*/
}

calcAgeExpr(1991);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    console.log(this); /*window (does not get own this, inherits parents this keyword.
    here == global*/
}


calcAgeArrow(1980);

const jonas = {
    year: 1991,
    calcAge: function() {
        console.log(2037 - this.year);
    }
}

jonas.calcAge();

const matilda = {
   year: 2017
}

matilda.calcAge = jonas.calcAge; // Method borrowing.

matilda.calcAge();

const funcione = jonas.calcAge; // possible because a function is just a value.

console.log(funcione);

funcione(); //ERROR!!!!!!!!!!!! this fuction no longer belongs to an object hence error now.
// regular function == undefined this.
