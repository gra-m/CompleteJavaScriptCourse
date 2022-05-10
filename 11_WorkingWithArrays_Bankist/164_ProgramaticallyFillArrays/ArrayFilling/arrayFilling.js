"use strict";
let arr = [1,2,3,4,5,6,7];
console.log(new Array(1,2,3,4,5,6,7));

const x = new Array(7);
console.log(x);

// FILL METHOD for EMPTY array;

x.fill(1, 3, 5);


arr.fill(23, 4, 6);
console.log(arr);


// Array.from
let arr1 = Array.from({length: 7}, () => 1);

console.log(arr1);

// _ underscore denotes we are not using current element and gets us to index.
let arr2 = Array.from({length: 7}, (_, index) => index + 1);
console.log(arr2);

// 100 random dice rolls:
let diceRolls = Array.from({length: 100},curr => Math
    .floor(Math.random() * (7 - 1) + 1));

console.log(diceRolls);

let oneCount = diceRolls.filter(function (curr) {
    return curr === 3}).reduce(function(acc, curr) {
        return acc + curr/3;
});

console.log(oneCount);
// get count of any side
const sideCount = function(array, side) {

    return array.filter(curr => curr === side).reduce((_1, _2, _3, array) => array.length)

}


let diceSides = Array.from({length: 6}, () => 0);
const countOccurences = function (arrayOfRolls) {

    diceSides.forEach(function(side, index) {
       diceSides[index] = (sideCount(arrayOfRolls, index + 1));
    });


    //arrayOfRolls.forEach((side, index) => console.log(side, index));

}

countOccurences(diceRolls);

console.log(diceSides);

