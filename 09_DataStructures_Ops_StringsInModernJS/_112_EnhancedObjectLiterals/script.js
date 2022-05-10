'use strict';

// 01: can calculate object field names:
const wiggle = 1;
const wobble = 1;
const days = ['thu', 'fri', 'sat'];



// 02_checkAndFlagPure_withoutMap can add external Obj literal directly to another object:

const openingHours = {
    [days[0]]: {
        open: 12,
        close: 22,
    },
    fri: {
        open: 11,
        close: 23,
    },
    [days[`${wiggle + wobble}`]]: {
        open: 0, // Open 24 hours
        close: 24,
    },
};

console.log('1/////////////////')
console.log(openingHours);


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours, //02_checkAndFlagPure_withoutMap: added just with object literal name and comma

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log('Main: ', mainIngredient);
        console.log(otherIngredients);
    },
};

console.log(restaurant);


//COPIED NOT TYPED == GOOD TO KNOW
restaurant.orderPizza('munchwooms', 'other', 'shite');
