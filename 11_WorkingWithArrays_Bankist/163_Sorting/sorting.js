"use strict";
// sort => MUTATES original

// strings:
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners)


// sorts numbers as strings so needs a compare callback function:
const movements =  [200, 450, -400, 3000, -650, -130, 70, 1300];
// Ascending:
// return < 0 A,B -1 // keep order
// return > 0 B,A  1 // switch order
movements.sort(function(current, next) {
    if (current > next)
        return 1;
    if (next > current)
        return -1;
})

console.log(movements);

// Descending:
// return < 0 B,A  1// switch order
// return > 0 A,B -1// keep order
movements.sort(function(current, next) {
    if (current > next)
        return -1;
    if (next > current)
        return 1;
})

console.log(movements);


// Ascending Simplified:
// return < 0 A,B  // keep order
// return > 0 B,A  // switch order
movements.sort((current, next) =>current - next);

console.log(movements);

// Descending Simplified:
// return < 0 B,A  // switch order
// return > 0 A,B -// keep order
movements.sort((a, b) => b - a);

console.log(movements);
