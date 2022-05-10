"use strict";
const budget = Object.freeze([
    {value: 250, description: 'Sold old TV 📺', user: 'jonas'},
    {value: -45, description: 'Groceries 🥑', user: 'jonas'},
    {value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas'},
    {value: 300, description: 'Freelancing 👩‍💻', user: 'jonas'},
    {value: -1100, description: 'New iPhone 📱', user: 'jonas'},
    {value: -20, description: 'Candy 🍭', user: 'matilda'},
    {value: -125, description: 'Toys 🚂', user: 'matilda'},
    {value: -1800, description: 'New Laptop 💻', user: 'jonas'},
]);

const personalSpendLimits = Object.freeze({
    jonas: 1500,
    matilda: 100,
    //jay: 100,
});

const getLimit = ((personalSpendLimits, user) => {
    return personalSpendLimits?.[user] ?? 0;
});

const addNewExpense = function (state, value, description, user = 'jonas') {
    const cleanUser = user.toLowerCase();
    return (value <= getLimit(personalSpendLimits, cleanUser)) ? [...state, {value: -value, description, user:cleanUser}] : state;
};

const checkAndFlagExpenses =  budgetState =>
{return budgetState.map(entry  => (
    entry.value < -getLimit(personalSpendLimits, entry.user)) ? {...entry, flag: 'limit-exceeded'} : entry
);}

const returnState = checkAndFlagExpenses(budget);
console.log(returnState);

//FILTER -> MAP ->JOIN
/*const logGreaterThan = function (budgetState, value) {
   const greaterThanValue = budgetState
       .filter(entry => entry.value <= -value)
       .map(entry =>  `${entry.description.slice(-2)} `).join('/');
    console.log(greaterThanValue);
};*/

//REDUCE
const logGreaterThan = function (budgetState, value) {
    const greaterThanValue = budgetState
        .reduce((accumulator, entry, index, array) => {
            let separator = index < array.length-1 ? '/' : '';
            return `${accumulator} ${entry.description.slice(-2)} ${separator}`
        }, '') // '' is starting value for accumulator.
    console.log(greaterThanValue);
};


const budgetAfter1NewAdded = addNewExpense(budget,10, 'Pizza 🍕');
console.log(budgetAfter1NewAdded);
const budgetAfter2NewAdded = addNewExpense(budgetAfter1NewAdded,100, 'Going to movies 🍿', 'Matilda');
console.log(budgetAfter2NewAdded);
const budgetAfter3NewAdded = addNewExpense(budgetAfter2NewAdded, 200, 'Stuff', 'Jay');
console.log(budgetAfter3NewAdded);

logGreaterThan(budgetAfter2NewAdded, 1);
