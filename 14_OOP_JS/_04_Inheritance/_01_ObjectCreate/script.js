"use strict";
// Object.create is another way of creating objects (vs constructor prototype and ES6) less
// used, but necessary to achieve inheritance.


// Any object literal
const PersonProto =  {
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

// instead of new Object(constructor Params)
const steven = Object.create(PersonProto);

console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto); // A prototype of PersonProto

// You can add a constructor like method to initialise properties:

const PersonWithConstructorLikeMethod = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
}


const sarah = Object.create(PersonWithConstructorLikeMethod);

sarah.init('Sarah', 1980);
sarah.calcAge();

