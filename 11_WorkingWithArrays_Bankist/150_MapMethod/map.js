// Does not mutate original array:
// like 'forEach', 'map' also has access to (item, index, fullarray) it needs these
// when it calls the callback function the user adds on each element in the array.****

// ALSO forEach == sideEffect on every iteration  map == new Array.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const euroToUsd = 1.2;

newMovements = movements.map(mov =>
   mov * euroToUsd
);

console.log(movements)
console.log(newMovements);

newMovements = movements.map(function(mov) {
   return mov + 23;
});

console.log(newMovements);

// The above is more in line with functional programming.

const movementsUSDfor = [];
for(const mov of movements)
    movementsUSDfor.push(mov * euroToUsd);

console.log(movementsUSDfor);

//****
const movementDescriptions = movements.map((movement, index, movements) => {
  if (movement > 0)
     return(`Movement ${index + 1}: You deposited ${movement}.`)
    else
        return `Movement ${index +1}: You withdrew ${Math.abs(movement)}.`
});

console.log(movementDescriptions);

// The above simplified:

const moveDescriptions2 = movements.map((mov, i) =>
    `Movement ${i +1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);

console.log(moveDescriptions2);



