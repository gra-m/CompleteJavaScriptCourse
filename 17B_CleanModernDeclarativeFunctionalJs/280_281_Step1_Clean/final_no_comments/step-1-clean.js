"use strict";


const budget = [
    {value: 250, description: 'Sold old TV 📺', user: 'jonas'},
    {value: -45, description: 'Groceries 🥑', user: 'jonas'},
    {value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas'},
    {value: 300, description: 'Freelancing 👩‍💻', user: 'jonas'},
    {value: -1100, description: 'New iPhone 📱', user: 'jonas'},
    {value: -20, description: 'Candy 🍭', user: 'matilda'},
    {value: -125, description: 'Toys 🚂', user: 'matilda'},
    {value: -1800, description: 'New Laptop 💻', user: 'jonas'},
];

const personalSpendLimits = {
    jonas: 1500,
    matilda: 100,
};

const getLimit = (user => {
    return personalSpendLimits?.[user] ?? 0;
});

const addNewExpense = function (value, description, user = 'jonas') {
    user = user.toLowerCase();
    if (value <= getLimit(user))
        budget.push({value: -value, description, user});
};

addNewExpense(10, 'Pizza 🍕');
addNewExpense(100, 'Going to movies 🍿', 'Matilda');
addNewExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkAndFlagExpenses = function () {
    for (const entry of budget)
        if (entry.value < -getLimit(entry.user))
            entry.flag = 'limit-exceeded';
};

checkAndFlagExpenses();
console.log(budget);

const logGreaterThan = function (value) {
    let output = '';
    for (const entry of budget)
        output += (entry.value <= -value) ? `${entry.description.slice(-2)} / ` : '';
    output = output.slice(0, -2);
    console.log(output);
};

logGreaterThan(400);
