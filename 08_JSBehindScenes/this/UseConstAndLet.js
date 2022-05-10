"use strict";
console.log('131_132_HigherOrderFunctions')
let deleteShoppingCart = function () {
    console.log('All shopping deleted');
}


if(!numProducts) deleteShoppingCart(); /*if falsy == undefined*/

var numProducts = 10; // var initialises as undefined and so can be used BEFORE declaration
// JUST USE const and let and never experience to see why change var to let and read error.
