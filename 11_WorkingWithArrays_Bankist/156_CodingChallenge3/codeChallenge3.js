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
const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

// calc dog age
//dogAge <= 2 ? 2 * dogAge : 16 + (4 * dogAge) MAP => array of human ages
// FILTER all dogs 18 or over  => array of human ages 18 or over
// REDUCE array to an accumulated total and then divide by length of array.

const calculateAvHumanAge = (ageArray) => {
    const humanYears = ageArray.map(dogAge =>
        dogAge <= 2 ? (2 * dogAge) : (16 + 4 * dogAge)
    );
    const eighteenOrOver = humanYears.filter(humanAge =>
        humanAge > 17
    );
    /*
       //Originally
        return eighteenOrOver.reduce(function(acc, age, index, arr) {
            return acc + age;
        }, 0) / eighteenOrOver.length;*/

    return eighteenOrOver.reduce(
        (acc, age, index, arr) => acc + age / arr.length, 0
    );

}

// I'd already done chained version:

console.log(calculateAvHumanAge(testData1));
console.log(calculateAvHumanAge(testData2));

const calculateAvHumanAgeChained = ageArray => {
    return ageArray
        .map(dogAge =>
            dogAge <= 2 ? (2 * dogAge) : (16 + 4 * dogAge))
        .filter
        (humanAge =>
            humanAge > 17)
        .reduce((acc, age, index, arr) => acc + age / arr.length, 0
        );
}

console.log(calculateAvHumanAgeChained(testData1));
console.log(calculateAvHumanAgeChained(testData2));
