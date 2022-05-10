"use strict";
// @Just Names Changed:

/*Cleaning steps:
1: find/replace var/const, then reintroduce let where required.
2: change to descriptive function names var names, follow some but not all:.
3: change 'limit' flag to descriptive 'limit-exceeded'.
4: change 'limits' const to 'personalSpendingLimits'.
5: change if to default parameter for user (jonas)
6: in addExpense = replace if else nested code to ternary operator.
7: COOL !in addExpense = replace ternary with optional chaining and ?? nullishCoalescing, leave
 example.
8: Use Enhanced Object Literal Syntax to tidy up if (value <= limit) in addExpense();
(if property name is the same as variable name, it does not have to be repeated).
9: check/checkExpenses => rename to checkAndFlagExpenses.

10: change checking logic if else to ternary => optionalChaining and?? nullishCoalescing operator.
11: replace ternary with optional chaining and ???
11A:DRY: The same code is being used twice, so refactor into its own function getLimit.
12: Use getLimit in flag if expression 18:07
13: Use getLimit in other expression.
14: bigExpenses to logGreaterThan(value);
15: Template literal the output of big Expenses:
16: Get rid of if in bigExpenses replace with ternary.
 */


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

const addNewExpense = function (value, description, user) {
    if (!user) user = 'jonas';
    user = user.toLowerCase();

    let limit;
    if (personalSpendLimits[user]) {
        limit = personalSpendLimits[user];
    } else {
        limit = 0;
    }

    if (value <= limit) {
        budget.push({ value: -value, description: description, user: user });
    }
};


addNewExpense(10, 'Pizza 🍕');
addNewExpense(100, 'Going to movies 🍿', 'Matilda');
addNewExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkAndFlagExpenses = function () {
    for (const entry of budget) {
        let limit;
        if (personalSpendLimits[entry.user]) {
            limit = personalSpendLimits[entry.user];
        } else {
            limit = 0;
        }

        if (entry.value < -limit) {
            entry.flag = 'limit-exceeded';
        }
    }
};

checkAndFlagExpenses();

console.log(budget);

const logGreaterThan = function (value) {
    let output = '';
    for (const entry of budget) {
        if (entry.value <= -value) {
            output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
        }
    }
    output = output.slice(0, -2); // Remove last '/ '
    console.log(output);
};

logGreaterThan(500);
