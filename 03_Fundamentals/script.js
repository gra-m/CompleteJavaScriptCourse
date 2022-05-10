'use strict';

// region STRICT MODE

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // to see Strict Mode mis-name this variable

if(hasDriversLicense) console.log(`I can drive`);

//const interface  = `Audio`; // restricted future use
*/

// endregion


// region FUNCTIONS

/*function logger(juice) {
    console.log(`My name is yika-yika and I say ` + juice);
}


function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

logger(fruitProcessor(4, 3));

const appleJuice = fruitProcessor(5,0);
console.log(appleJuice);*/
//endregion


// region Function declarations vs expressions
// Using Function expressions forces you to show define all of your
// functions at the beginning of your code.

/*
const age1 = calcAge1(2012); // can call before defined

function calcAge1(birthYear) {
    return 2037 - birthYear;
}



// FUNCTION EXPRESSIONS (expressions produce values functions are just values)

const calcAge2 = function(birthYear) {
    return 2037 - birthYear;
}


const age2 = calcAge2(2012);


console.log(age1,` `, age2)
*/

// endregion


// region ARROW FUNCTIONS ES6

// Normal Function
function calcAge(birthYear) {
    return 2037 - birthYear;
}

// Normal Function Expression
const calcAge2a = function (birthYear) {
    return 2037 - birthYear;
}

// Arrow Function

const calcAge3 = birthYear => 2037 - birthYear;

console.log(calcAge3(1991));

// Arrow functions do not get a 'this' keyword..

const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2037 - birthYear;
    return `${firstName} retires in ${65 - age} years.`;
}

console.log(yearsUntilRetirement(`Jonas`, 1991));

// endregion


// region Functions calling functions
const cutPieces = fruit => fruit * 4;

const fruitProcessor = function (apples, oranges) {
    return `Juice was made with ${cutPieces(apples)} apple pieces and ${cutPieces(oranges)} orange pieces`;
}

console.log(fruitProcessor(3, 4));

const calcAge1 = function (birthYear) {
    return 2038 - birthYear;
}

const yearsUntilRetirement1 = function (birthYear, firstName) {
    const retirement = 65 - calcAge1(birthYear);

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years.`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired.`)
    }
}

yearsUntilRetirement1(1973, `Graham`);


// endregion


// region code challenge 1:

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3;
}

const checkWinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins === avgKoalas)
        return `It was an exact draw`;
    else if (avgKoalas >= 2 * avgDolphins)
        return `Koalas won ${avgKoalas} to ${avgDolphins}`
    else if (avgDolphins >= 2 * avgKoalas)
        return `Dolphins won ${avgDolphins} to ${avgKoalas}`
    else {
        return `\t\Honours were by no means even, but no definitive winner was found
     \t\Dolphins scored ${avgDolphins}
     \t\Koalas scored ${avgKoalas}`;
    }
}


console.log(checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49)));

console.log(checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27)));

// endregion


// region AGE FUNCTION member access . notation vs [] notation
/*

const personObj = {
    firstName : `Person`,
    lastName : `Obj`,
    birthYear: 1984,
    age : function() {
        return this.age = new Date().getFullYear() - this.birthYear;
    },
    job : 'being an object',
    friends : ['Wimmy', 'Wammy', 'Womple']
};
const whenToUseComputedMemberAccess = `Name`;
console.log(personObj.age());

console.log(personObj[`first` + whenToUseComputedMemberAccess]);
console.log(personObj[`last` + whenToUseComputedMemberAccess]);

const interestedIn = prompt (
    `What do you want to know about person object?
Choose between firstName, lastName, age, job and friends`);

if(personObj[interestedIn]) {
    if (interestedIn != `friends`)
        console.log(personObj[interestedIn]);
    else
        console.log(`
        ${personObj.firstName} ${personObj.lastName} has ${personObj.friends.length} friends,
        but their bestest ever friend is ${personObj.friends[0]}, because .. blah blah bla..`)
}
    else
        console.log(`You must have typed a bunch of faff there`);

    // SET NEW MEMBER -age and return it too
const altPersonObj = {
    firstName : `Alt`,
    lastName : `Person-Obj`,
    birthYear: 1967,
    calcAge : function() {
        this.age = new Date().getFullYear() - this.birthYear;
        return this.age;
    },
    personSynopsis : function () {
     return `\t${this.firstName} ${this.lastName} was born in ${this.birthYear}
      \tworking as ${this.job}.\n\tWe've had a file on them since ${this.birthYear +1}.
      \tThey have ${this.returnFriendFriends()} on file\n${this.printFriends()}`
    },
    job : 'someone doing stuff for money',
    //friends : ['Xylo', 'Mylo', 'Egfield'],
    //friends : [],
    friends : ['Xylo'],
    printFriends : function () {
        let formattedFriends = ``;
        for(let i = 0;i < this.friends.length; i++ ) {
            formattedFriends += `\t` + (i+1) + `. ` + this.friends[i] + `\n`
        }
        return formattedFriends;
    },
    returnFriendFriends : function() {
        let numberOfFriends = this.friends.length;
        if (numberOfFriends === 1)
            return `1 friend`;
        else if (numberOfFriends === 0)
            return `no friends`
        else
        return `${numberOfFriends} friends`;
    }
};

// This version calculates and adds age property on first call.
let theirAge = altPersonObj.calcAge(); // works
//let theirAge = altPersonObj["calcAge"]; // returns the function does not call it

console.log(altPersonObj.birthYear);
console.log(theirAge);

console.log(altPersonObj.personSynopsis());
*/

// endregion


//region BMI but using objects

// Mark Miller and John Smith: fullName/mass/height/BMI/calcBMI/
// Function : compare2BMIs

let person1 = {
    fullName: `Mark Miller`,
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
    calcFirstName: function () {
        this.objFirstName = this.fullName.substring(0, this.fullName.indexOf(` `));
        return this.objFirstName;
    }
}

let person2 = {
    fullName: `John Smith`,
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        return this.BMI;
    },
    calcFirstName: function () {
        this.objFirstName = this.fullName.substring(0, this.fullName.indexOf(` `));
        return this.objFirstName;
    }
}

compareBMIs(person1, person2);

function printBMIComparison(higherBMI, lowerBMI) {

    higherBMI.calcFirstName();
    lowerBMI.calcFirstName();
    if (higherBMI === lowerBMI)
        console.log(`${higherBMI.objFirstName} and ${lowerBMI.objFirstName} have the same BMI (${higherBMI.BMI}).`)
    else
        console.log(`${higherBMI.objFirstName}'s BMI (${higherBMI.BMI})
         is higher than ${lowerBMI.objFirstName}'s (${lowerBMI.BMI})!`)
}

function compareBMIs(person1, person2) {
    if (person1.calcBMI() > person2.calcBMI())
        printBMIComparison(person1, person2);
    else
        printBMIComparison(person2, person1);
}

// endregion


// region Bugs In Console
/*

const measureKelvin = function() {
   const measurementObj = {
       type: `temp`,
       unit: `celcius`,
       value: prompt(`Degrees celsius:`)
    };
        console.table(measurementObj);
     return  Number(measurementObj.value) + 273;
}

console.log(measureKelvin());
*/

//endregion


function printForecast(array1, array2) {
    const fullForecast = array1.concat(array2);
    if(fullForecast === 0)
        console.error(`Array is empty`)
    let returnString = '';
    for (let i = 0; i < fullForecast.length; i++) {
         returnString += ` ... ${fullForecast[i]}degC in ${i+1} days`;
    }
    return returnString;
}

let testData1 = [17, 21, 23];
let testData2 = [12, 5, -5, 0, 4]
console.log(printForecast(testData1, testData2));
