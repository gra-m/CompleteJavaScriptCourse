'use strict';
/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
    The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
    THIS TEST DATA (pasted to textarea)
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)

underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
    GOOD LUCK 😀
*/


document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

const longestLineLength = (arrayOfStrings => {

    let longest = 0;
    for (let string of arrayOfStrings) {
        string = string.replace('_', '').trim();
        if(string.length > longest) {
            longest = string.length;
        }
    }
    return longest;
});




function camelCaseToConsole(underscoreText) {
    underscoreText = underscoreText.toLowerCase().trim();

    const splitByNewLine = underscoreText.split('\n');
    const longestLine = longestLineLength(splitByNewLine);


    let count = 1;
    let spaces = 3;

    for(let line of splitByNewLine) {
        let wordLine = [];
        const sepWords = line.split('_');
        for(let [index, word] of sepWords.entries()) {
            if(index > 0)
               word = word[0].toUpperCase() + word.slice(1);
            wordLine.push(word);
        }
        let wordline = wordLine.join('');
        let camelPartLength = wordline.length;
        console.log(wordLine.join('') + ('✅'.repeat(count++)).padStart((longestLine + spaces) - (camelPartLength - (count - 1)), " "));
    }

}

camelCaseToConsole(
    `underscore_case
first_name_TerMs
Some_Variable_ReSULTs
calculate_AGE_?
delayed_departure_ArriVing_SOOOOn!`);






// Create event listener to collect entered text and pass to function.
button.addEventListener('click', click => {

    const text = document.querySelector('textarea').value;
    camelCaseToConsole(text);
});


