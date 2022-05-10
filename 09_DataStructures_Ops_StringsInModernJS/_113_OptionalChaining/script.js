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

    order: function(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderPizza(mainIngredient, ...otherIngredients) {
        console.log('Main: ', mainIngredient);
        console.log(otherIngredients);
    },
};

console.log('The Restaurant Obj://////////');
console.log(restaurant);


console.log('/////////////////////////');
console.log('Optional Chaining: ?. and ?? work together//////////');

console.log('.mon does not exist == undefined:');
console.log(restaurant.openingHours.mon);

try {console.log(restaurant.openingHours.mon.open)}
    catch(err) {console.log(err.message, '.mon.open == undefined.open === error:')}


console.log('/////////////////////////');
console.log('Old, limited but nice to read way of handling://////////');

if(restaurant.openingHours.mon)
    console.log(restaurant.openingHours.mon.open);
console.log('==testing for existence === no error');

console.log('/////////////////////////');
console.log('If statement quickly gets messy/////////////////////////');
console.log('When you are checking existence of chain of properties:');

console.log('if(restaurant.openingHours && restaurant.openingHours.fri)\n' +
    '    console.log(restaurant.openingHours.fri.open); ');

if(restaurant.openingHours && restaurant.openingHours.fri)
    console.log(restaurant.openingHours.fri.open);

// With Optional Chaining
console.log('Enter ES 2020: Optional Chaining check not null/undefined NULLISH://////////');
console.log(restaurant.openingHours.mon?.open); // returns undefined immediately @ mon?.
console.log('undefined returned -> this did not error: restaurant.openingHours.mon?.open');


console.log('/////////////////////////');
console.log('Maybe opening hours won\'t be returned from API call too:');
console.log('console.log(restaurant.openingHours?.mon?.open)');
console.log("We're now checking for that too with a simple '?'")
console.log(restaurant.openingHours?.mon?.open);


console.log('/////////////////////////');
// Real world example, loop over days check if open on each:
const days = ['mon','tue','wed','thu','fri','sat','sun',];

console.log("Check if day exists: for (const day of days) {" +
    "const open = restaurant.openingHours?.[day]?.open;" +
    "console.log(`On ${day}, we open at ${open}`);  ");

for (const day of days) {
    const open = restaurant.openingHours?.[day]?.open;
    console.log(`On ${day}, we open at ${open}`);
}

console.log('/////////////////////////');
console.log("Replace undefined: for (const day of days) {" +
    "const open = restaurant.openingHours?.[day]?.open || 'never';" +
    "console.log(`On ${day}, we open at ${open}`);  ");

    for (const day of days) {
    const open = restaurant.openingHours?.[day]?.open || 'never';
    console.log(`On ${day}, we open at ${open}`);
}

console.log('/////////////////////////');
console.log('but || classes sat 0 as undefined as it is FALSEY\n' +
    'use ?? check for NULLISH instead');

console.log("Replace undefined: for (const day of days) {" +
    "const open = restaurant.openingHours?.[day]?.open ?? 'never';" +
    "console.log(`On ${day}, we open at ${open}`);  ");
console.log('AND:');

for (const day of days) {
    const open = restaurant.openingHours?.[day]?.open ?? 'never';
    console.log(`On ${day}, we open at ${open}`);
}

// METHODS
console.log('/////////////////////////');
console.log('OPTIONAL CHAINING WITH METHODS/////////////////////////');
console.log('only call a method if it exists');

console.log(restaurant.order?.(0,1) ?? "Method 'order(0, 1)' does not exist");
console.log(restaurant.orderPantaloons?.(0,1) ?? "Method 'orderPantaloons()' does not exist");


// ARRAYS
console.log('/////////////////////////');
console.log('OPTIONAL CHAINING WITH ARRAYS/////////////////////////');

const users = [{name: 'users array [0] name', email:'hellow@shepmal.com'}, {name: 'Gillihum', email:'hellow@sdf.com'}];
const emptyusers = [];

console.log(users[0]?.name ?? 'array is empty');
console.log(emptyusers[0]?.name ?? 'Yes emptyusers array is empty');
