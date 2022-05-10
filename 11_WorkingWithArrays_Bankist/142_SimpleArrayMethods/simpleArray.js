
//SLICE doesn't mutate original array
let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(1));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));


console.log(arr.slice(2, -1)); // everything from 2 EXCEPT last

// CREATE SHALLOW COPIES
console.log(arr.slice());
console.log([...arr]);
//of array (first level of array, no embedded objects).

//SPLICE MUTATES deleting what you take from it.
console.log(arr.splice(2));
console.log(arr);

arr = ['a', 'b', 'c', 'd', 'e'];

//SPLICE -> start, then the second number is the delete count

console.log(arr.splice(-1));// removes last element


arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.splice(2,2)); // removes two elements
// counting from and including 2

console.log(arr);


// REVERSE MUTATES.


arr = ['a', 'b', 'c', 'd', 'e'];
arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

// CONCAT does not mutate
const letters = arr.concat(arr2);
console.log(letters);

// Same with Spread, Spread.

console.log([...arr, ...arr2]);


// Join with separator;
console.log(letters.join('\n'));

