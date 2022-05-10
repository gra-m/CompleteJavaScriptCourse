"use strict";
// REMEMBER:

// CREATE SHALLOW COPIES of arrays if you are going to use a mutating method
//console.log(arr.slice());
//console.log([...arr]);

// Slice does not mutate

// remove the first and last elements of each array for Julia's array, they are cats, not dogs.
// For each remaining dog log to the console whether it is adult > 3 yo
// Dog number xx is an adult and is xx years old.
// Dog number xx is still a puppy.

// The test arrays are:
/*
Test1: Julia [3, 5, 2, 12, 7] Kate [4, 1, 15, 8, 3]
*
Test1: Julia [9, 16, 6, 8, 3] Kate [10, 5, 6, 1, 4]
*
* */

// variable name must be in position 0 of array.
const julia1 = ['julia1', 3, 5, 2, 12, 7];
const kate1 = ['kate1', 4, 1, 15, 8, 3]
const julia2 = ['julia2', 9, 16, 6, 8, 3];
const kate2 = ['kate2', 10, 5, 6, 1, 4]

// removes first or last if variableName includes 'julia'
const removeFirstAndLastTwo = function (variableName, array) {
    if (variableName.includes('julia') )
    return array.slice(1, -2);
    else
        return array;
};


const outputAdultOrPuppyMessage = function (array) {
    // remove the first element and declare it as variableName
    let variableName = array.shift();

    array = removeFirstAndLastTwo(variableName, array);

    console.log(array);

    array.forEach(function(dog, i, _) {
       if(dog < 3)
           console.log(`Dog number ${i + 1} is still a puppy.`);
       else
           console.log(`Dog number ${i + 1} is an adult and is ${dog} years old.`);
    });


}

outputAdultOrPuppyMessage(julia1);
outputAdultOrPuppyMessage(kate1);
outputAdultOrPuppyMessage(julia2);
outputAdultOrPuppyMessage(kate2);

//
console.log('We have mutated original array with shift, but not with removeFirstAndLastTwo ' + julia1)
