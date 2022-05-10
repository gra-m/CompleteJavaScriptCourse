'use strict';
// live-server

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    foodOrder: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];

    }
};

// region Basic Array Destructuring/unpacking
// original:
const arr = [2, 3, 4]
const a = arr[0];
const b = arr[1];
const c = arr[2];

// ES6
const [x, y, z] = arr;
console.log('ES6 array destructuring: ', x, y, z)
console.log('////////////////////////////////')


const [first, second] = restaurant.categories;
console.log(first, second);
console.log('/////////////////////////////////////////////')

const [f1st, ,t3rd]  = restaurant.categories;
console.log('First and third, skip second: ',f1st, t3rd);
console.log('/////////////////////////////////////////////')

console.log('switch main and secondary, no need for temp: ')
// old way:
let [main, , secondary] = restaurant.categories;
console.log('Old Switch original main/secondary: ', main, secondary);

const temp = main;
main = secondary;
secondary = temp;

console.log('After Switch main/secondary', main, secondary);
console.log('///////////////////////////////////////');
console.log('New way: [main, secondary] = [secondary, main];');

[main, secondary] = [secondary, main];

console.log('New way  main/secondary: ', main, secondary);

// endregion


// region FoodOrder, receive two vars from a function
console.log('////////////////////////////////////////////Food Order');

const [starter, mainCourse] = restaurant.foodOrder(2,0);

console.log(starter, mainCourse);
// endregion


// region NestedArray destructuring
console.log('Nested array destructuring///////////////////////////////////////');
const nested = [2, 4, [5, 6]];

const [elementOne, , [,elementTwo]] = nested;
console.log(elementOne, elementTwo);


// endregion


// region default values -> important for unknown array sizes:
console.log('/////////////////////////Default values when destructured');
const [p, q, r] = [8, 9];
console.log('r is undefined as only two elements were returned', p, q, r);

const [h=1, i=1, j=1] = [, , 100];
console.log('Only j had its value set by returned array: ', h, i, j);

// endregion
