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
}

// Data needed for first part of the section
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    openingHours,

};

///////////////////////////////////////
// Maps: Fundamentals
const rest = new Map();
console.log('SET//////////');
console.log('mapName.set(key, value)');

rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
    .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open :D')
    .set(false, 'We are closed :(');

console.log('GET//////////');
console.log('mapName.get(key)');

console.log(rest.get('name'));
console.log(rest.get(true));
console.log(rest.get(1));


console.log('&& returns first falsy value 3 is not > 11 == false')
// open == 11 close =23
const time = 8;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log('HAS//////////');
console.log('mapName.has(key)');


console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();

console.log('arr, Test// etc/////////////////////////////////////////');
const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);
console.log(rest.size);
console.log(rest.get(arr));


///////////////////////////////////////
// Maps: Iteration
const question = new Map([
    ['question', 'What is the best programming language in the world?'],
    [1, 'C'],
    [2, 'Java'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'Correct 🎉'],
    [false, 'Try again!'],
]);
console.log(question);
// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
    if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);
console.log(question.get(question.get('correct') === answer));
// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
