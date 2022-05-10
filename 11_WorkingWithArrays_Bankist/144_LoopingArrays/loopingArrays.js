"use strict";

const movements = [200, 450, -400, 3001, -651, -130, 70, 1300];


console.log('--------------FOR OF---------------------')

for (const movement of movements) {
   if(movement >0)
   {
       console.log(`You deposited ${movement}`);
   } else {
       console.log(`You withdrew ${Math.abs(movement)}`);
   }
}

console.log('--------------FOR OF WITH COUNTER---------------------')

for (const [i, movement] of movements.entries()) {
    if(movement >0)
    {
        console.log(`Movement ${i+1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${i+1}: You withdrew ${Math.abs(movement)}`);
    }
}



console.log('----------FOR EACH-------------------------' +
    '--------contains anonymous callback function that tells higher order function what to do');
movements.forEach(function(movement) {
    if(movement > 0)
    {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});


console.log('----------FOR EACH Arrow-------------------------' +
    '---------cannot break out or continue in forEach');
movements.forEach(movement => {
    if(movement > 0)
    {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
});


console.log('----------FOR EACH ARROW with index/counter----------------------');
// callback function in for each calls movement index and array in background

movements.forEach((movement, index, array) => {
    if(movement >0)
    {
        console.log(`Movement ${index+1}: You deposited ${movement}`);
    } else {
        console.log(`Movement ${index+1}: You withdrew ${Math.abs(movement)}`);
    }
});
