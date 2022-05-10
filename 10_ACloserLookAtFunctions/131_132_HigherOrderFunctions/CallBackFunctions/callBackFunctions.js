"use strict";

// generic functions


const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

// helper function
const capitalizeFirstLetter = function(arrayOfWords) {
    let othersCapitalized = '';
    for (let element of arrayOfWords) {
        for (let i = 0; i < element.length; i++) {
            element = element.charAt(0).toUpperCase() +
                element.substring(1);
        }
        othersCapitalized += element + ' ';
    }
    return  othersCapitalized.substring(0, othersCapitalized.length -1);
}




const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), capitalizeFirstLetter(others)].join(' ');
}

function highFive() {
    console.log('✋')
}

// higher order functions that take a callback function (the generic functions above
// 1
const transformer = function(str, callbackFunction) {
    console.log(str)
    console.log(`Transformed string ${callbackFunction(str)}`);

    console.log(`Transformed by ${callbackFunction.name} `)

}

// 2
transformer('JavaScript is the best!', oneWord);
transformer('JavaScript is the best!', upperFirstWord);

// 3

document.body.addEventListener('click', highFive);




