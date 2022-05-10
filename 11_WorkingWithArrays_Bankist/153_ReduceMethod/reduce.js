"use strict";
// another argument in favour of the functional approach is that there is no need for
// the external variables like 'accumulated value', imagine if there are a lot...

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

console.log(movements);

// Reduce has a fourth parameter it has access to, and that it passes to any callback function:
// Accumulator. It also takes the start point of the accumulator.
const balance = movements.reduce(function(accumulator, current,index, arr) {
    console.log(`Original Iteration ${index}: ${accumulator}`);
    return accumulator + current;
}, 0);

console.log('Original', balance)

const balanceArrow = movements.reduce((acc, curr, i) => {
    console.log(`Balance Arrow Iteration ${i}: ${acc}`);
    return acc + curr;
}, 0);

console.log('Balance Arrow', balanceArrow);



// Doing the same with a for loop

let accumulatedValue = 0;

movements.forEach((mov, index) => {
    console.log(`For Each Iteration ${index}: ${accumulatedValue}`);
    return accumulatedValue += mov;
})

console.log('ForEach', accumulatedValue);

//---------------> MAX VALUE


const longMaxValue = movements.reduce(function (acc, mov ) {
    if (acc > mov)
        return acc;
    else
        return mov;
})




const maxValue = movements.reduce((acc, mov) =>
    acc >  mov ? acc :  mov, movements[0]
);


console.log('longMaxValue', longMaxValue);

console.log('maxValue', maxValue);
