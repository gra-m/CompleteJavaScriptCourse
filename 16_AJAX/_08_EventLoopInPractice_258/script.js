"use strict";
/*
*SetTimeout and Promise are completed immediately would hit CallBack Queue
* in order but the Promise goes to prioritised MicroTask queue
* */


//TEST1

console.log('Test1 start'); // 1 Top level code (outside of callback) runs first.
setTimeout(() => console.log('Test1 0sec timer'),0); // 4. Asynch, non-Promise == CallBack Queue
Promise.resolve('Test1 Resolved promise 1').then(res => console.log(res)); // 3. Asynch Promise ==
// MicroTask
console.log('Test1 end'); // 2 Top level code (outside of callback) runs first.

//TEST2 Microtasks and timers at same time
// == delayed timers below promise  2 resolves straight away
// but the callback task it adds delays both timers on the callback
//queue.

console.log('Test2 start');
setTimeout(() => console.log('Test2 0sec timer'),0);
Promise.resolve('Test2 Resolved promise 1').then(res => console.log(res));
Promise.resolve('Test2 Resolved promise 2').then(res =>
{
    console.log('In promise 2')
    for(let i = 0; i < 10000000000; i++) {}
    console.log(res)
});
console.log('Test2 end');
