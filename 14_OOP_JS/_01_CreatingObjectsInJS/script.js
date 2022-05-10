"use strict";

// Constructor
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // functions dont go in contstructor, this would mean they are saved in every instance
}


const personObject1 = new Person('personObj1', 1972);
const personObject2 = new Person('personObj2', 1974);

/* How it works {} = simple empty object
1. New {} is created
2. function is called, this = {}
3. {} is linked to prototype
4. function automatically returns {}
 */

console.log(personObject1, personObject2);

console.log(personObject2 instanceof Person);


// PROTOTYPES:

console.log(Person.prototype);

// How to add a method to your class, add it to Class' prototype:
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear) ;
}


personObject1.calcAge();
personObject2.calcAge();

// View prototype of an object:

console.log(personObject1.__proto__);
//The prototype of personObject1 is the prototype property of the Person constructor function.


console.log(personObject1.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(personObject1));

// climb the prototype inheritance tree to the prototype property of the Object constructor
// function:

console.log(personObject1.__proto__.__proto__); // see methods of Object prototype.

