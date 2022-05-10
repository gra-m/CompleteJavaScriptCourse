'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');

button.addEventListener('click', click => {
    const text = document.querySelector('textarea').value;
});


/*
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

My added requirements based on known issues:

1. code must be very easy to read.
2. 280_281_StepCode of process must be extracted into re-useable helper methods rather than hidden in main
 function.
3. Code must eradicate any caps inconsistencies in main data.
4. Code should be easy to remedy were raw data to change with use of constants:
5. Code must make use of nested array of arrays, something I've not done before.
4a : _Delayed  could become eg. _Late
4b : + Separator changes regularly
4c : ; Separator changes regularly

MISSED OPTIONAL ==> Try catch /error handling, this is primarily a string manip exercise.
*/


const flights =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsTest =
    '_LAte_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_LaTe_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// FlightSeparator
const FS = '+';
// FlightValueSeparator
const VS = ';';
// WordSeparator (Also starts flight info)
const WS = '_';
// DelayKey
const DK = 'late'
// Data MUST be lowerCased for processing;
// Data Format at time of implementation 16/01/22:
//'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';


function nestData(dataArray) {
    for(let [index, data] of dataArray.entries()) {
       data = data.split(VS);
       dataArray[index] = data;
    }
    return dataArray;
}


// 01
function prepareFlightData(rawData) {
    const splitLowerData = rawData.toLowerCase().split(FS);
    return nestData(splitLowerData);
}

// 02_checkAndFlagPure_withoutMap


function firstCharUpper(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function stringDelayedOrNot(data) {
    //console.log(data);
    if (data.slice(0,(WS + DK).length) === WS + DK) {
        //console.log('🔴 Delayed ' + data.slice((WS + DK).length + 1));
        return '🔴 Delayed ' + firstCharUpper(data.slice((WS + DK).length + 1));
    }
    else
        return firstCharUpper(data.slice(1));
}


function fromCode(data) {
    //console.log('from ' + data.slice(0,3).toUpperCase());
    return 'from ' + data.slice(0,3).toUpperCase();
}

function toCode(data) {
    //console.log('to ' + data.slice(0,3).toUpperCase());
    return 'to ' + data.slice(0,3).toUpperCase();
}


function arrivalDepartureTime(data) {
    data = data.replace(':', 'h');
    //console.log(` (${data})`);
    return `(${data})`;
}

function processPreparedFlightData(preparedFlightData) {

    for (let data of preparedFlightData) {
        data[0] =
        stringDelayedOrNot(data[0]);
        data[1] =
        fromCode(data[1]);
        data[2] =
        toCode(data[2]);
        data[3] =
        arrivalDepartureTime(data[3]);
    }
    return preparedFlightData;
}

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// 03_withMap_egs

function printFlightData(readyToPrintFlightData) {
    for (const flightInfo of readyToPrintFlightData) {
        console.log(flightInfo.join(' ').padStart(36));
    }

}





const preparedFlightData = prepareFlightData(flights);
//const preparedFlightData = prepareFlightData(flightsTest);

const readyToPrintFlightData = processPreparedFlightData(preparedFlightData);

printFlightData(readyToPrintFlightData);
// Expected output

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)


// A very different beast:
///////////////////////////////////////
// String Methods Practice Course Solution:
// Nice! Take aways -> #1 Initial array split in for of
// #2 Deconstruction directly in loop
// #3 It's general concentrated goodness..

const flights2 =
    '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights2.split('+')) { //#1
    const [type, from, to, time] = flight.split(';'); // #2
    const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
        '_',
        ' '
    )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(36);
    console.log(output);
}
