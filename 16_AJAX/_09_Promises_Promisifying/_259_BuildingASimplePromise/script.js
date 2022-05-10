"use strict";
const lotteryPromise = new Promise((resolve, reject) => {
    if (Math.random() >= 0.5)
        resolve('1. You WIN 💰')
    else
        reject(new Error('1. You lost your money 😢 💩'))
})

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// but all the above does is promisify top-level, non callBack? code it may as
// well be a function, imagine if the Math.random function were really complex
// and ran on a separate server and took time to resolve:


const lotteryPromise1 = new Promise((resolve, reject) => {
    console.log('2. Draw has gone to the server 🔮, awaiting response..')
    setTimeout(() => {
        if (Math.random() >= 0.5)
            resolve('2. You WIN 💰')
        else
            reject(new Error('2. You lost your money 😢 💩'))
    }, 10);
})

lotteryPromise1.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeOut

const wait = seconds => {
    return new Promise(resolve =>
    setTimeout(resolve, seconds * 1000)
    )}

// these 'waits' can now be chained as single level promises:

wait(5).then(() => {
    console.log('I waited 5 seconds');
    return wait(4);
}).then(() => {
    console.log('I waited 4 seconds');
    return wait(3);
}).then(() => {
    console.log('I waited 3 seconds');
    return wait(2);
}).then(() => {
    console.log('I waited 2 seconds');
    return wait (1);
}).then(() => {
    console.log('I waited 1 seconds');
})

/* vs: CALLBACK HELL, heavy nesting

setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
        console.log('2 second passed');
        setTimeout(() => {
            console.log('3 second passed');
            setTimeout(() => {
                console.log('4 second passed');
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);

 */
