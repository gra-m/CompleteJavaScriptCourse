"use strict";

const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};

const account2 = {
    owner: 'Jossica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
};

const account3 = {
    owner: 'Stoven Thomas Walliems',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};

const account4 = {
    owner: 'Soroh Smythe', movements: [430, 1000, 700, 50, 90], interestRate: 1, pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// FLAT get all of the movements in one flat array:

// 1: map to a new array
const allMovements = accounts.map((account, index, array) => account.movements);
console.log(allMovements);

// 2: flatten to default level (1) use 2 etc dependent on array depth

const allMovementsFlat = allMovements.flat();
console.log(allMovementsFlat);

const totalOfAllMovements = allMovementsFlat.reduce((acc, mov, index, arr) => acc + mov);
console.log(totalOfAllMovements)

// FLAT Chained:

const total = accounts.map(account => account.movements).flat().reduce((acc, movement) => acc + movement);

console.log(total);


// As the above is common it has been optimised:
const totalFM = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov);

console.log(totalFM);


