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

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
// destructure passed object direct in function
    orderDelivery: function({starterIndex=1,
                                mainIndex=1,
                                time = '22:30',
                                address,
                            }) {
        console.log(
            `Order received! 
            ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
            will be delivered to 
            ${address} at ${time}`);
    }

};


// region Destructuring examples:

// 01 Destructure object:
console.log('///////////////////Destructure object');
const {name, mainMenu, openingHours} = restaurant;
console.log('destructured Obj vars: ', name, mainMenu, openingHours);

// 02_checkAndFlagPure_withoutMap Destructure and rename:
console.log('/////////////////////////////////////////');
const {name:restName, mainMenu:mains,} = restaurant;
console.log('renamed destructured Obj vars: ', restName, mains, open);

// 03_withMap_egs. Default values
console.log('///////////////////////////////////////////');
const {menu = [], starterMenu:starters = []} = restaurant;
console.log('menu not in original == [] empty', menu, starters);

// 04_Filter_thenMapString_Join Mutating variables when destructuring variables
console.log('///////////////////////////////////////////');
let a = 111;
let b = 999;

const obj = {a: 23, b: 7, c: 14};

// cannot simply do below as { signifies begin of code block.
//{a, b,} = obj;
//WRAP all in parentheses:
({a, b,} = obj);
console.log(a, b);

// 05 nested Objects
console.log('///////////////////////////////////////////////');
const {fri: {open:o, close: c}} = openingHours;
console.log('fri open and close destructured:', o, c);

// endregion

console.log('///////////////////////End Main examples/////////////')

// region function destructures object for params:
//call orderDelivery with created object, order of fields does not have to match:
restaurant.orderDelivery({
    time: '22:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
});

// this time using default values:
restaurant.orderDelivery({
    address: 'Via del Sole, 21',
});

// endregion




