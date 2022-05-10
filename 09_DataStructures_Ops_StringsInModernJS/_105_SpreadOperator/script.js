'use strict';


// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours: {
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
    },

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with
        ${ing1}, ${ing2},  ${ing3}`)
    }
};


// 01 Prior to ES6 adding to additional array:
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0],arr[1],arr[2],];
console.log(badNewArr);

// 02_checkAndFlagPure_withoutMap Using spread
console.log('///////////')
const goodNewArr = [3, 4, ...arr];
console.log(goodNewArr);

// 03_withMap_egs Create new array from existing object array
console.log('///////////')
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// 04_Filter_thenMapString_Join Shallow copy array
console.log('///////////')
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// 05 Join two arrays
console.log('///////////')
const startAndMain = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(startAndMain);

// 06 Until recently spread any iterable but NOT objects
console.log('///////////')
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...str);
console.log()

// 07 Real example: ORDER PASTA with prompts:

console.log('REAL WORLD///////////')
let ingredients = ['this', 'that', 'the other'];

// create ingredients from input:
/*const ingredients =[
    prompt("Let's make pasta! Ingredient 1?"),
    prompt("Ingredient 2?"),
    prompt("Ingredient 3"),
];*/


console.log(ingredients);

// old way
restaurant.orderPasta(
    ingredients[0],
    ingredients[1],
    ingredients[2]);

// spread ...
restaurant.orderPasta(...ingredients);


//08 ES 2018 also works on Objects
console.log('ES 2018 you can spread ...objects///////////')
const newRestaurant = {
    foundedIn: 1998,
    ...restaurant,
    founder: 'Guiseppe'};
console.log(newRestaurant);

//09 instead of object.assign to copy

console.log('Object Shallow copy///////////')
const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorane Roma';

console.log(restaurantCopy.name);
console.log(restaurant.name);



