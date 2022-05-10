"use strict";


// This works because of Closures

const greet = function (greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey'); // storing the greeterHey function

greeterHey('Wiggle');
greeterHey('Woggle');
greeterHey('Woo');

greet('Hello')('Smarty-pants'); // using returned function straight away

// Very important for functional programming.

// Challenge transform the above into arrow functions:


/*const greet2 = greeting => {
    return name => {
        console.log(`${greeting} ${name}`);
    }
}*/

const greet2 = greeting => name => console.log(`${greeting} ${name}`);



const greeter2Hey = greet2('Sup');

greeter2Hey('Wiggle');
greeter2Hey('Woggle');
greeter2Hey('Woo');

greet2('Hi')('babe..')
