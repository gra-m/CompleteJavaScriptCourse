const friends = ['Michael', 'Steven', 'Peter'];

let friendArrayLength = friends.push('Jay'); // returns length
console.log(friends, friendArrayLength);

friendArrayLength = friends.pop(); // returns removed element
console.log(friends, friendArrayLength);


friendArrayLength = friends.unshift('Jon'); // returns length
console.log(friends, friendArrayLength);

friendArrayLength = friends.shift();  // returns removed element
console.log(friends, friendArrayLength);


console.log(friends.indexOf('Steven'));

console.log(friends.indexOf('Bob'));

friends.push(23);
// ES6 TESTS with STRICT equality no type coercion.
if (friends.includes('Steven'))
console.log('You already have a friend called Steven.');

console.log(friends.includes('Bob'));
console.log(friends.includes('23'));

