"use strict";


const currencies = new Map([
  ['USD', 'United States Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Great British Pound'],
]);

currencies.forEach(function (value, key, map){
 console.log(key, value);
});

// Signature was kept the same even though Set has no key value pair, just unique items.
const curr = new Set(['USD', 'USD', 'EURO', 'GBP', 'GBP']);
console.log(curr);

curr.forEach(function (value, key, set) {
  console.log(`${key}: ${value} `);
});

curr.forEach(function (value, _, set) {
  console.log(`${value} `);
});

// _ denotes throw away parameter


