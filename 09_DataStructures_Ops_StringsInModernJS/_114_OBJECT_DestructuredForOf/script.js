'use strict';
const openingHours = {
    thu: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    sat: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,
};

// Similar to 111 where arrayName.entries() returns index/value pairs of array.
// Here we deconstruct objects in a forOf using Object.keys/values/entrie(ObjectName).

console.log("Similar to 111 where arrayName.entries() returns index/value pairs of array."
    + "Here we deconstruct objects in a forOf using Object.keys/values/entrie(ObjectName)");

console.log('PROPERTY KEYS//////////////////////////');
// Looping Objects: Object Keys, Values, and Entries
// Property NAMES
const properties = Object.keys(openingHours);
console.log('Object.keys(openingHours) returns:', properties);

console.log('Building openStr')
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
    openStr += `${day}, `;
}

console.log('openStr ===', openStr);


console.log('PROPERTY VALUES//////////////////////////');
// Property VALUES
const values = Object.values(openingHours);
console.log(values);


console.log('ENTIRE OBJECT === ENTRIES//////////////////////////');
// Entire object
const entries = Object.entries(openingHours);
console.log('const entries = Object.entries(openingHours);');
console.log(entries);
console.log('Dig into the returned nested arrays///////////////////////////////');
console.log('for (const [key, value] of entries)')
// [key, value]
console.log('Destructure the value object directly [key, {open, close}]')
console.log(
"for (const [day, {open, close}] of entries) {" +
    "console.log(`On ${day} we open at ${open} and close at ${close});"
+"}");

for (const [day, {open, close}] of entries) {
    console.log(`On ${day} we open at ${open} and close at ${close}`);
}

