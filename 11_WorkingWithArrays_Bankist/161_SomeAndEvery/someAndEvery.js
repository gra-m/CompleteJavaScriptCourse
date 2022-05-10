"use strict";
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// includes == only tests for EQUALITY
console.log(movements.includes(-130));

// SOME == test contition
const anyDeposits = movements.some(mov => mov > 3100);

console.log(anyDeposits);


const tenPercentCriteria = function(loanAmount) {
    const tenPercent = loanAmount / 10;
    return movements.some(mov => mov >= tenPercent);
}

console.log(tenPercentCriteria(30000));

// EVERY

console.log('Every movement a deposit?', movements.every(function (movement) {
    return movement > 0;
}))

console.log('Every movement er, exists?', movements.every(function (movement) {
    return movement > 0 || movement < 0;
}))

// Separate callback:

const deposit = mov => mov > 0;

console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

