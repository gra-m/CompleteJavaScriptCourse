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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// another method that uses a callback function.
// Unlike filter() it does not return an array but the first instance within
// the array that satisfies its boolean expression.
const firstWithdrawal = movements.find(function (movement) {
    return movement < 0;
});

/*const foundIndex = movements.findIndex(function(movement) {
    return movement === 3000;
});*/

function findIndexOf(array, number) {
    return array.findIndex(function(arrayElement) {
        return arrayElement === number;
    })
}


/*function findIndexOf(array, number) {
    return array.findIndex(element => element === number);
}*/




// const findIndexOf = ((array, number) => array.findIndex(element => element === number));

console.log(findIndexOf(movements, 3000));

console.log(firstWithdrawal);

// find specific object within array of objects base on one of its properties:

//console.log(accounts);

const account = accounts.find(account => account.owner === 'Soroh Smythe');

console.log(account);

const returnSpecificAccountObject = function(passedOwner, arrayOfAccounts) {
    return arrayOfAccounts.find(account => account.owner === passedOwner)
}

console.log(returnSpecificAccountObject('Jonas Schmedtmann', accounts))


// For of version for comparison;

const givenUserName = 'Jossica Davis';
let retrievedObject = '';
for (const account of accounts) {
    if(account.owner === givenUserName)
        retrievedObject = account;
}

console.log(retrievedObject);








