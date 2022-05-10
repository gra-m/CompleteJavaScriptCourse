"use strict";
// Another reason for using map filter and reduce is that they allow method chaining.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov) {
    return mov > 0;
});

console.log(deposits);


// Unlikely usecase for using index, payWall a service.
const oneInTwowithdrawals = movements.filter((mov, index) => {
    if (index % 2 === 0)
        return mov > 0;
});

console.log(oneInTwowithdrawals);
