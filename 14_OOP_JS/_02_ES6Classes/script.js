"use strict";
//This is essentially syntactic sugar, still implemented in same way:



// Class Expression
const PersonCl1 = class {

}


// Class declaration, methods are still added to .prototype of the class, declaration
// just has a more familiar syntax.
class PersonCl2 {
    constructor(firstName, birthYear) {
       this.firstName = firstName;
       this.birthYear = birthYear;
    }
    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

const jessica = new PersonCl2('Jessica', 1996);
jessica.calcAge();


// adding a method in the traditional way:

PersonCl2.prototype.greet = function() {
    console.log(`Hey ${this.firstName}`);
}

jessica.greet();
// Classes are not hoisted like function expressions. (cannot be used until declared)
// Classes are first class citizens (passed and returned from functions)
// Classes are executed in strict mode.


