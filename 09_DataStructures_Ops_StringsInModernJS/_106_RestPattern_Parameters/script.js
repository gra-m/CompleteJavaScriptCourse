'use strict';

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

    orderPizza: function(mainIngredient, ...otherIngredients) {
        console.log(mainIngredient);
        console.log(otherIngredients);
    }
};

//A
console.log('/////A) DESTRUCTURING/////////////////')

// 01 Spread extracts array/obj and is on right side of =
console.log('/////...SPREAD/////////////////')
const exampleArr = [1, 2, 3, 4];

const arr = [86, 54, ...exampleArr];
console.log(arr);


// 02_checkAndFlagPure_withoutMap Rest packs 'the rest' into array/obj and is on left side of =
console.log('/////...REST with arrays/////////////////')

const [a, b, ...others] = [1, 2, 3, 45, 67, 87, 54];
console.log('created variables: ', a, b, others);


console.log('/////Define a limited Pizza menu/////////////////')

const [pizza, , risotto, ...allOtherFood] = [
    ...restaurant.mainMenu,
    ...restaurant.starterMenu,
];
console.log('Menu with always available vs all other food\n', pizza, risotto, allOtherFood);

console.log('/////...REST with objects/////////////////')

const {sat, ...weekdays} = restaurant.openingHours;
console.log('Separated out weekday opening hours:', weekdays);

// B Functions
console.log('/////REST in functions/////////////////')

//REST param expects sep nums and changes to array
const add = function(...numArray) {
    let sum = 0;
        for(let x = 0; x < numArray.length; x++ ){
           sum += numArray[x];
        }
    console.log(sum)
    console.log('NOW USING forOf array.entries()')

    sum = 0;
    for (const [index, value] of numArray.entries()) {
        sum += value;

    }

    console.log(sum);
}

add(2,3);
add(5, 6, 3, 5, 6, 7);
add(6,5,3,6,7,2,3,4,5,6,4,3,5,3,);

console.log('/////////////////////////////////')

console.log('Pass an array to a rest array function by spreading it in the call: add(...array)')

const anneArray = [2, 3, 4, 5, 6,];

add(...anneArray);

console.log('/////////////////////////////////')

restaurant.orderPizza('mushroom', 'wiggle-worms', 'weak apology for existing', 'cows were nice');
restaurant.orderPizza('mushroom');
