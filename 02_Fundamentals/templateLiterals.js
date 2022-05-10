const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';

console.log(jonas);

// Using Template Literal:

const jonas2 = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;

console.log(jonas2);

console.log('String over \n\multiple\n\lines');

console.log(`String
over multiple
lines`);

console.log((1>0) ? `yes`:`no`);

// My solution with duplicate code:
let tip1;
let bill1 = 301;

console.log((bill1 > 49 && bill1 < 301) ? `The bill is ${bill1}, the tip is ${tip1 = bill1 * 0.15} making a total of ${tip1 + bill1}` :
`The bill is ${bill1}, the tip is ${tip1 = bill1 * 0.20} making a total of ${tip1 + bill1}`);

// His solution:

let bill = 275;
let tip = (bill >= 50 && bill <= 300) ? 0.15 * bill : 0.20 * bill;

console.log(`The bill is ${bill}, the tip is ${tip} making a total of ${bill + tip}`)
