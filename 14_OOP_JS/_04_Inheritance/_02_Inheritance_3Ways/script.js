"use strict";
// region 1: Inheritance with Constructor Function Made Classes:
// See also CC_03
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++")
const Person_CF = function(firstName, birthyear) {
    this.firstName = firstName;
    this.birthYear = birthyear;
}

Person_CF.prototype.calcAge = function() {
    console.log(2037 - this.birthYear)
}

const Student_CF = function(firstName, birthYear, course) {
    Person_CF.call(this, firstName, birthYear); // this for Person(param) is undefined, with call
    // we explicitly state this.Student_CF
    //this.firstName = firstName; //DRY
    //this.birthYear = birthYear; //DRY
    this.course = course;
}

// ADD INHERITANCE by Linking prototypes:
Student_CF.prototype = Object.create(Person_CF.prototype);

// ERROR:
// Student_CF.prototype = Person_CF.prototype; // Would make same object.


// Add an instance method by adding it to the prototype of Student_CF

Student_CF.prototype.introduce = function() {
    console.log(`Hello, I am ${this.firstName}, I am studying ${this.course}`);
}


const mike = new Student_CF('Mike', 2020, 'Computer Science');

console.log(mike);
mike.introduce();



// At this point we may have worked out how to call the parent classes constructor, but there
// is NO prototype chain between Student_CF and Person_CF (see jpg).

// CREATE INHERITANCE LINK: SEE ABOVE cannot be done here as Object.create would override
// any methods we've added.


// LOOKING UP THE PROTOTYPE CHAIN
mike.calcAge(); // looks at mike no calcAge, looks at student, no calc age looks at Person BINGO!


console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
console.dir(Student_CF.prototype.constructor); // A::::Object.create made constructor property
// parent

Student_CF.prototype.constructor = Student_CF; // B::::this remedies this.

//Up to

//endregion


// region 2: Inheritance with ES6 made Classes:
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
class PersonE6 {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }

    calcAge() {
        console.log(2037 - this.birthYear);
    }
}

class StudentE6 extends PersonE6 {
    constructor(name, birthYear, course) {
        super(name, birthYear);
        this.course = course;
    }

    introduce() {
        console.log(`Hello, I am ${this.name}, I am studying ${this.course}`);
    }
}

const mikey = new StudentE6('Mikey', 1920, 'Computer Science');

mikey.calcAge();
mikey.introduce();

//endregion


// region 3: Inheritance with Object.create
console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++")
// Create object literal
const PersonOC = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }
}

const someone1 = Object.create(PersonOC);

someone1.init('Someone1', 1945);

// ParentChild relationship created: PersonOC obj is the  prototype or StudentOC object:
const StudentOC = Object.create(PersonOC);

StudentOC.init = function(firstName, birthYear, course) {
    PersonOC.init.call(this, firstName, birthYear);
    this.course = course;
}

// Add a method specific to StudentOC
// no need for prototype.introduce as with CF
StudentOC.introduce = function() {
    console.log(`Hi, I am ${this.firstName}, I was born in ${this.birthYear} and I study ${this.course}`);
}


//ParentChild relationship created: jay is the prototype of the StudentOC object.
const jay = Object.create(StudentOC);
jay.init('jay', 1917, 'Plinky-Plonks');

console.log(jay);
jay.calcAge();
jay.introduce();


// endregion
