"use strict";
// region REQUIRED OBJ
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const accounts = [account1, account2];

// endregion


console.log('////////////////////////');
console.log('Converting and Checking NUMBERS');
console.log('////////////////////////');

console.log(`A quirk of JS, all numbers are actually decimals behind the scenes:
?23===23.0?`);
console.log(23 === 23.0);
console.log(`Binary vs Base 10 has the usual issues, they have not been dealt with in JS
Base 10 - 0 to 9. 1/10 = 0.1. 3/10 = 3.3333333 
Binary base 2 - 0 to 1`
);
console.log(`0.1 + 02 =`);
console.log(0.1 + 0.2);
console.log(`0.1 + 0.2 === 0.3`);
console.log(0.1 + 0.2 === 0.3);

console.log('CONVERT STRING TO NUMBER');
console.log(`Number('23')`);
console.log(Number('23'));
console.log(`or instead just +'23'`);
console.log(+'23');

console.log('PARSE INTEGER/FLOAT');
console.log(`Number.parseInt('30px', 10)  ,10 == the base or 'radix'`);
console.log(Number.parseInt('30px', 10));
console.log(`Number.parseInt('e23', 10) BUT the number has to be first for js to clean up:`);
console.log(Number.parseInt('e23', 10));
console.log(`Number.parseInt(' 2.5rem ') just the int part of the string returned:`);
console.log(Number.parseInt('  2.5rem  '));
console.log(`Number.parseFloat(' 2.5rem ') the entire number in the string returned:`);
console.log(Number.parseFloat('  2.5rem  '));

console.log('//////////////////////////')
console.log('NAN does not mean Not A Number use Number.isFinite() for that.');
console.log(`There are five different types of operations that return NaN:
Number cannot be parsed (e.g. parseInt("blabla") or Number(undefined))
Math operation where the result is not a real number (e.g. Math.sqrt(-1))
Operand of an argument is NaN (e.g. 7 ** NaN)
Indeterminate form (e.g. 0 * Infinity, or undefined + undefined)
Any operation that involves a string and is not an addition operation (e.g. "foo" / 3)`);

console.log('CHECK ?isNAN? ?Number.isNAN?');
console.log('Infinites pass the isNAN check');
console.log(`isNaN() will return true if the value is currently Nan OR it is going to be after
 it is coerced into being a 'Number'
 Number.isNaN() will return true only if the value is currently NaN.`);
console.log(`isNaN(20) then Number.isNaN(20)`);
console.log(isNaN(20));
console.log(Number.isNaN(20));
console.log(`isNaN('20') then Number.isNaN('20')`);
console.log(isNaN('20'));
console.log(Number.isNaN('20'));
console.log(`isNaN('justAString') then Number.isNaN('justAString')`);
console.log(isNaN('justAString'));
console.log(Number.isNaN('justAString'));
console.log("Why is the above not true? 'justAString' is not and is not going to be a number");
console.log("typeof('a String')=", typeof('a String'));
console.log("typeof(NaN) =", typeof(NaN));
console.log((typeof('obviouslyAString') === typeof NaN));


console.log(`isNaN(+'20X') then Number.isNaN(+'20X')`);
console.log(isNaN(+'20X'));
console.log(Number.isNaN(+'20X'));
console.log(`isNaN(Number('20X')) then Number.isNaN(Number('20X'))`);
console.log(isNaN(Number('20X')));
console.log(Number.isNaN(Number('20X')));
console.log(`isNaN(23 / 0)`);
console.log(isNaN(23 / 0));

console.log('///////////////////////////////////////////////');
console.log('///////////////////////////////////////////////');
console.log('///////////////////USE THIS to test for numbers!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
console.log('///////////////////////////////////////////////');
console.log('///////////////////////////////////////////////');

console.log('Number.isFinite checks is N and is not infinite N');
console.log('Number.isFinite(20):');
console.log(Number.isFinite(20));
console.log(`Number.isFinite('20'):`);
console.log(Number.isFinite('20'));
console.log("Number.isFinite(+'20X'):");
console.log(Number.isFinite(+'20X'));
console.log("Number.isFinite(+'20'):");
console.log(Number.isFinite(+'20'));
console.log("Number.isFinite(23/0):");
console.log(Number.isFinite(23 / 0));

console.log('Faith restored, NaN is confusing until you look it up, it really means:')
console.log(`You did something that looks like you expect a number back from, you didn't get one.
Not (E)Axpected Number`);


console.log('Number.isInteger(23):');
console.log(Number.isInteger(23));
console.log('Number.isInteger(23.0):');
console.log(Number.isInteger(23.0));
console.log('Number.isInteger(23/0):');
console.log(Number.isInteger(23 / 0));

console.log('////////////////////////');
console.log('MATH and ROUNDING');
console.log('////////////////////////');

console.log('SQUAREROOT');
console.log('Math.sqrt(25):');
console.log(Math.sqrt(25));


console.log("Didn't understand concept of this:");
console.log('https://www.youtube.com/watch?v=A_AzrdQT2c0');
console.log('To the power of ** fractions/ less than one');
console.log('25 to the power of (1 / 2):');
console.log(25 ** (1 / 2));
console.log('8 to the power of (1 / 3):');
console.log(8 ** (1 / 3));

console.log('MATH.MAX any non number in iterable breaks it');
console.log('Math.max all nums 23 greatest:');
console.log(Math.max(5, 18, 23, 11, 2));
console.log(`Math.max '23' as string greatest:`);
console.log(Math.max(5, 18, '23', 11, 2));
console.log('Math.max, non number string breaks it:');
console.log(`Math.max '23px' included:`);
console.log(Math.max(5, 18, '23px', 11, 2));
console.log(`Math.max '5px' included:`);
console.log(Math.max('5px', 18, 23, 11, 2));

console.log('MATH.MIN should just return 5');
console.log(Math.min(5, 18, 23, 11, 2));

console.log('MATH.PI X 10 ** 2:');
console.log(Math.PI * Number.parseFloat('10px') ** 2);
console.log('3.1415 * 10 * 10');
console.log(3.1415 * 10 * 10);

console.log("Math.trunc vs Math.floor");
console.log(`MATH TRUNC rounds down towards zero`);
console.log(`MATH FLOOR rounds down towards negative infinity`);
console.log(`MATH CEILING rounds up towards positive infinity`);

console.log('RANDOM WITHOUT MATH.TRUNC');
console.log("Math.random() * 6 + 1");
console.log(Math.random() * 6 + 1);
console.log('RANDOM WITH MATH.TRUNC');
console.log("Math.trunc(Math.random() * 6) + 1");
console.log(Math.trunc(Math.random() * 6) + 1);
console.log('//////////////////////////////////');
console.log('Random function passed min and max:');


const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;
// 0...1 -> 0...(max - min) -> min...max
console.log(randomInt(10, 20));

console.log('Rounding to integers:');
console.log('rounding 23.3 and 23.9:');
console.log(Math.round(23.3));
console.log(Math.round(23.9));
console.log('Math.ceil:');
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));
console.log('Math.floor');
console.log(Math.floor(23.3));
console.log(Math.floor('23.9'));
console.log('Math.trunc 23.3 -23.3');
console.log(Math.trunc(23.3));
console.log(Math.trunc(-23.3));
console.log('Math floor -23.3 -23.9');
console.log(Math.floor(-23.3));
console.log(Math.floor(-23.9));
console.log('Math ceil');
console.log(Math.ceil(-23.3));
console.log(Math.ceil(-23.9));

//// Rounding decimals
console.log('ROUNDING DECIMALS toFixed');
console.log("(2.7).toFixed(0)");
console.log((2.7).toFixed(0));
console.log("(2.7).toFixed(3)");
console.log((2.7).toFixed(3));
console.log("(2.345).toFixed(2)");
console.log((2.345).toFixed(2));
console.log("+(2.345).toFixed(2)");
console.log(+(2.345).toFixed(2));
///////////////////////////////////////
// Modulus
console.log("5 / 2");
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log("8 % 3");
console.log(8 % 3);
console.log("8 / 3");
console.log(8 / 3); // 8 = 2 * 3 + 2
console.log("6 % 2");
console.log(6 % 2);
console.log("6 / 2");
console.log(6 / 2);
console.log("7 % 2");
console.log(7 % 2);
console.log("7 / 2");
console.log(7 / 2);

console.log(
`// JS FUNCTION TYPES:
// Function expression not hoisted
const isOdd = function(n) {
  return n % 2  === 1;
}
// Arrow function (has this of parent)
const isEven1 = n => n % 2 === 0;
// Function declaration
function isEven(n) {
  return n % 2 === 0;}`);


// Function expression not hoisted
const isOdd = function(n) {
 return n % 2  === 1;
}

// Arrow function (has this of parent)
const isEven1 = n => n % 2 === 0;

// Function declaration
function isEven(n) {
  return n % 2 === 0;
}

console.log("isEven1(8)");
console.log(isEven1(8));
console.log("isEven1(23)");
console.log(isEven1(23));
console.log("isEven1(514)");
console.log(isEven1(514));
console.log("isOdd(8)");
console.log(isOdd(8));
console.log("isOdd(23)");
console.log(isOdd(23));
console.log("isOdd(514)");
console.log(isOdd(514));

///////////////////////////////////////
// Numeric Separators as in Java
console.log("Numeric Separators 287_460_000_000 =");
const diameter = 287_460_000_000;
console.log(diameter);
console.log("345_99 price is in pence 34,599, but shows pound value in code")
const priceInPence = 345_99;
console.log("priceInPence =");
console.log(priceInPence);

console.log("const PI = 3.14_15");
const PI = 3.14_15;
console.log(PI);

console.log("Number('230_000')");
console.log(Number('230_000'));
console.log("Number('230000')");
console.log(Number('230000'));
console.log("parseInt('a230_000')");
console.log(parseInt('a230_000'));
console.log("parseInt('230_000')");
console.log(parseInt('230_000'));

///////////////////////////////////////
// Working with BigInt
console.log("BigInt////////////");
console.log('Java int range for reference: -2147483648 to 2147483647.');
console.log("JS is: 2 ** 53 - 1");
console.log(2 ** 53 - 1);
console.log("Number.MAX_SAFE_INTEGER");
console.log(Number.MAX_SAFE_INTEGER);
console.log("After this, weird shit happens:");
console.log("2 ** 53 + 1");
console.log(2 ** 53 + 1);
console.log("2 ** 53 + 2");
console.log(2 ** 53 + 2);
console.log("2 ** 53 + 3");
console.log(2 ** 53 + 3);
console.log("2 ** 53 + 4");
console.log(2 ** 53 + 4);

console.log("Larger than JS max must be designated BigInt with 'n' 12334234234234n")
console.log("4838430248342043823408394839483204n = ")
console.log(4838430248342043823408394839483204n);
console.log("Declare BigInt(48384302)");
console.log(BigInt(48384302));
// Operations
console.log("10000n + 10000n");
console.log(10000n + 10000n);
console.log("36286372637263726376237263726372632n * 10000000n");
console.log(36286372637263726376237263726372632n * 10000000n);
console.log("Math. functions are not available on BigInts:");
//console.log(Math.sqrt(16n));
console.log(`console.log(Math.sqrt(16n)); ===
Uncaught TypeError: Cannot convert a BigInt value to a number AT Math.sqrt (anonymous)`);
console.log(`
/////////////////////////////////////////////////
num has to be changed into BigInt before it can be used:
const huge = 20289830237283728378237n;
const num = 23;`)
const huge = 20289830237283728378237n;
const num = 23;
console.log("huge * BigInt(num)");
console.log(huge * BigInt(num));

// Exceptions
console.log("20n > 15");
console.log(20n > 15);
console.log("20n === 20");
console.log(20n === 20);
console.log("typeof 20n");
console.log(typeof 20n);
console.log("20n == '20'");
console.log(20n == '20');
console.log("huge + ' is REALLY big!!!'");
console.log(huge + ' is REALLY big!!!');

// Divisions
console.log("9n / 3n");
console.log(9n / 3n);
console.log("11n / 3n");
console.log(11n / 3n);
console.log("11 / 3");
console.log(11 / 3);
console.log("////////////////////////////////////");
console.log("////////////////DATES///////////////");
console.log("/////////////CREATE DATES//////////////////");
// Create a date
console.log("const now = new Date();");
const now = new Date();
console.log('NOW:');
console.log(now);
console.log("NEW Date('Aug 02 2020 18:05:41')");
console.log(new Date('Aug 02 2020 18:05:41'));
console.log("NEW Date('December 24, 2015')");
console.log(new Date('December 24, 2015'));
console.log("NEW Date(account1.movementsDates[0])");
console.log(new Date(account1.movementsDates[0]));
console.log("MONTH argument starts at 0 for January, like old Java Calendar, day is day of week," +
    " 'date' is day of month.");
console.log("NEW Date(2037, 10, 19, 15, 23, 5) // note year,month,date,hours,minutes,seconds");
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log("NEW Date(2037, 10, 31) // note year,month,date");
console.log(new Date(2037, 10, 31));
console.log("UNIX beginning of time, any current date based on milliseconds since: ")
console.log(new Date(0));
console.log("3 DAYS in milliseconds === 3 * 24 * 60 * 60 * 1000");
console.log("NEW Date(3 * 24 * 60 * 60 * 1000) // note 3 days after the UNIX beginning of time");
console.log(new Date(3 * 24 * 60 * 60 * 1000));
console.log("////////////////////////////////////");
console.log("////////////////DATES///////////////");
console.log("//////////WORKING WITH DATES////////");
// Working with dates
console.log("const future = new Date(2037, 10, 19, 15, 23);");
const future = new Date(2037, 10, 19, 15, 23);
console.log("console.log(future);");
console.log(future);
console.log("future.getFullYear()");
console.log(future.getFullYear());
console.log("future.getMonth()");
console.log(future.getMonth());
console.log("future.getDate()");
console.log(future.getDate());
console.log("future.getDay() //note (numbered day of week)");
console.log(future.getDay());
console.log("future.getHours()");
console.log(future.getHours());
console.log("future.getMinutes()");
console.log(future.getMinutes());
console.log("future.getSeconds()");
console.log(future.getSeconds());

console.log("CONVERT date to ISO string with date.toISOString()");
console.log(future.toISOString());
console.log("date.getTime() GET milliseconds since UNIX beginning of time for a date.");
console.log(future.getTime());
console.log("Create new date based on number of milliseconds since UNIX beginning of time");
console.log("new Date(2142256980000)");
console.log(new Date(2142256980000));
console.log("///////////// setFullYearNotAFunctionSET parameters for existing date variable that" +
    " was created using now:");
console.log("Const set this way cannot have params set as dynamic: const actualNow = Date.now();");
const actualNow = Date.now();
console.log("NOW: // note cl(actualNow)")
console.log(actualNow);
//console.log("actualNow.setFullYear(2040);");
//actualNow.setFullYear(2040);
console.log("cl(actualNow");
console.log(actualNow);


// TEST
console.log("TESTSERTSWERSERE")
future.setFullYear(1940);
console.log(future);



console.log('////////////////////////')
console.log('DATE OPERATIONS')
console.log('////////////////////////')
const futureA = new Date(2037, 10, 19, 15, 23);
console.log(+futureA);
const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);
const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);


console.log('////////////////////////')
console.log('INTERNATIONALISING NUMBERS')
console.log('////////////////////////')


const num1 = 3884764.23;
const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};
console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num1));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num1));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num1));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num1)
);

console.log('////////////////////////')
console.log('TIMERS')
console.log('////////////////////////')

const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients
);
console.log('Waiting...');
if (ingredients.includes('asd')) {
  console.log('clearingTimeout');
  clearTimeout(pizzaTimer);
}

/*
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
*/
