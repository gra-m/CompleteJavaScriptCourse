"use strict";
// 149 filter, then map returned array to string for every entry, then join array with '/'.
/*
FUNCTIONAL JAVASCRIPT:
* A: Immutability
* B: Side Effects Pure Functions
* C: Making data transformations using pure functions
like, map filter reduce.

1: Make personalSpendLimits (and any other data structure) immutable with Object.freeze().
1a: Note, this is not a deepfreeze, can change nested, existing element properties.
1b: Object.freeze() breaks budget.push (=== new elements).
1c: addNewExpense has side effect as attempts to mutate budget object outside of it.
1d: addNewExpense is 'impure'.
HOW TO MAKE PURE FUNCTION:
1e: Should always pass all of the data that function depends on to the function:
1f: Then the function should not change/mutate any of these values.
1g: No side-effects.
1h: SOLUTION -> make a copy -> return a copy of the state.
1i: Means new state not global state must be passed in, so calls are like:

STATE_________________CALL with current state:
const oneExpenseAdded = call(originalExpenses);
const twoExpensesAdded = call(oneExpenseAdded);
const finalExpenses = call(twoExpensesAdded);


ADD NEW EXPENSE:
2: Args for addNewExpense = state/limits/value/description/user
2a Params for addNewExpense = budget/personalSpendLimits/value/description/user
3: create const cleanUser, do not mutate user.
4: user: cleanUser user set to cleanUser in push;;
5: !! but we are mutating budget !! instead: 10:19
5a: Instead return an array spreading state [...state, ] with the
additional (NEW) expense (the passed in params):

if (value <= getLimit(cleanUser)) {
return [...state, {value: -value, description, user: cleanUser}];

5b save the return from first addNewExpense to const newBudget1. newBudget1 will need
to be passed to addNewExpense for the next addition..
5c return original state if value not <= getLimit(cleanUser).
5d change to ternary return with choices above.
5e addNewExpense is now a PURE function.
5f pass the  returns (with the new state of 'budget') through the 3 addNewExpense calls.

CHECK AND FLAG EXPENSES Data Transformation:

6 checkAndFlagExpenses is an impure function as it mutates 'budget'.
6a getLimit is also impure with its need for a global variable, instead, pass in
personalSpendLimits so it can do all its work without looking up the scope chain.
const getLimit = (personalSpendLimits, user) 20:57
6b checkAndFlagExpenses, update this and other uses so they pass personalSpendLimits as param.

7. checkAndFlagExpenses, replaceForLoop with data transformation function map.
Map creates a brand new object based on the original.

return state.map(entry => { //7a returns a copy of the iterable it receives
//7b return entry with exceeded-limit flag, or return entry.
return entry.value < -getLimit(personalSpendLimits, entry.user)
? {...entry, flag: 'exceeded-limit'} : entry
)};

7c: Question, what variables are available in the map/filter/reduce callback functions,
and in what order.
ANSWER:
////////MAP === entry, index, iterable can be passed into the callback
 function that will be called on every element:
 return budgetState.map((entry, index, array) => {
        console.log(`${entry} ${index} ${array.length} `) ;
        return budgetState;
    });

8. Transform the map function above into an arrow function. 27:20

ACHIEVE IMMUTABILITY for regular variable 'output' in logGreaterThan, in functional code you will
hardly ever see the let variable.

9. pass in state and value.
9a. create const greaterThanValue
9b. filter state to greaterThanValue (entry <= -value expenses).
9c. chain a map to the filter creating the string we need for every greaterThanValue
9d. join with '/'


10. experiment replacing map with reduce, the accumulator being string, entry being current:

.reduce((string, current) => `${string} /  ${current.description.slice(-2)}`, '');

where '' is the initial value for the accumulator.

Note all functions in this code that console.log anything are considered impure in
the strictest sense as printing to the console is a side-effect.

Good to keep side-effects to the end.

The way state is handled in this code is very much the way that react and redux help to handle
it.

Add functions for adding income, total expenses and incomes, overallbudget,
what %age of income expenses are.

Rules made to be broken -> these are guidelines.
*:*/

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

/*ACHIEVE IMMUTABILITY for regular variable 'output' in logGreaterThan, in functional code you will
hardly ever see the let variable.

9. pass in state and value.
9a. create const greaterThanValue
9b. filter state to greaterThanValue (entry <= -value expenses).
9c. chain a map to the filter creating the string we need for every greaterThanValue
9d. join with '/' JOIN, without this just array.*/

const logGreaterThan = function (budgetState, value) {
    /*let output = '';
    for (const entry of budgetState)
        output += (entry.value <= -value) ? `${entry.description.slice(-2)} / ` : '';
    output = output.slice(0, -2);*/
     const greaterThanValue = budgetState.filter((entry, index, array) =>
    {
        return entry.value <= -value;
    }).map(entry =>  `${entry.description.slice(-2)} `).join('/');

    console.log(greaterThanValue);
};



const budgetAfter1NewAdded = addNewExpense(budget,10, 'Pizza 🍕');
console.log(budgetAfter1NewAdded);
const budgetAfter2NewAdded = addNewExpense(budgetAfter1NewAdded,100, 'Going to movies 🍿', 'Matilda');
console.log(budgetAfter2NewAdded);
const budgetAfter3NewAdded = addNewExpense(budgetAfter2NewAdded, 200, 'Stuff', 'Jay');
console.log(budgetAfter3NewAdded);

logGreaterThan(budgetAfter2NewAdded, 400);
