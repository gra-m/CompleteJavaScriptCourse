'use strict';

console.log('//////////////////////////');
console.log('03STRINGS//////////////////////////////////////');
console.log('SPLIT//////////////////////////');
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));
const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);


const capitaliseName = (name => {
  name.toLowerCase().trim();
  const nameArray = [...name.split(' ')];
  const namesUpper = [];
  for(const name of nameArray) {
      //let ok = name[0].toUpperCase() + name.slice(1);
      //namesUpper.push(ok);
      namesUpper.push(name.replace(name[0], name[0].toUpperCase()));
  }
    console.log(namesUpper.join(' '));
});

capitaliseName('slip into communism with new progressive shoes!');


const capitalizeName = function (name) {
    const names = name.split(' ');
    const namesUpper = [];
    for (const n of names) {
        // namesUpper.push(n[0].toUpperCase() + n.slice(1));
        namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
    }
    console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

console.log('PADDING//////////////////////////');
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));
const maskCreditCard = function (number) {
    const str = number + '';
    const last = str.slice(-4);
    return last.padStart(str.length, '*');
};
console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('334859493847755774747'));


console.log('REPEAT//////////////////////////');
const message2 = 'Bad waether... All Departues Delayed... ';
console.log(message2.repeat(5));
const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${'🛩'.repeat(n)}`);
};

planesInLine(5);
planesInLine(3);
planesInLine(12);

console.log('//////////////////////////');
console.log('02STRINGS//////////////////////////////////////');
console.log('//////////////////////////');

console.log('//////////////////////////');
console.log('string.toUpperCase(), string.toLowerCase()');

const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());
// Fix capitalization in name
const passenger = 'jOnAS'; // Jonas
const passengerLower = passenger.toLowerCase();


const passengerCorrect =
    passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect);

console.log('COMPARE === COMPARE//////////////////////////');
console.log('Compare Strings? First step generally email.toLowerCase().trim()');
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

console.log('REPLACE//////////////////////////');
console.log('Replacing characters in strings');
console.log("string.replace(searchValue '%', replaceValue '$').replace(',', '.');");

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);


console.log('REPLACEAll (ES2021?) or make searchValue /door/g GLOBAL//////////////////////////');

const announcement =
    'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));



console.log("return BOOLEAN with INCLUDES string.includes('A320');");
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320'));
console.log(plane1.includes('Boeing'));
console.log(plane1.startsWith('Airb'));
if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
    console.log('Part of the NEW ARirbus family');
}

// Practice exercise
const checkBaggage = function (items) {
    const baggage = items.toLowerCase();
    if (baggage.includes('knife') || baggage.includes('gun')) {
        console.log('You are NOT allowed on board');
    } else {
        console.log('Welcome aboard!');
    }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


console.log('//////////////////////////');
console.log('01STRINGS//////////////////////////////////////');
console.log('//////////////////////////');
const airlineA = 'TAP Air Portugal';
const plane = 'A320';

console.log('grab index of string: string[0]');
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("NEW: immediately grab index of string:'StRing'[0]")
console.log('B737'[0]);
console.log(airlineA.length);
console.log('B737'.length);

console.log('//////////////////////////');
console.log('//Character/string LAST/INDEXOF//')
console.log("//string.indexOf('s')");
console.log(airlineA.indexOf('r'));
console.log("//string.lastIndexOf('s')");
console.log(airlineA.lastIndexOf('r'));
console.log(airlineA.indexOf('portugal'));

console.log('//////////////////////////');
console.log('//Character/string index// TAP Air Portugal');
console.log(airlineA.slice(4)); // Air Portugal
console.log(airlineA.slice(4, 7)); //Air
console.log(airlineA.slice(0, airlineA.indexOf(' '))); // TAP
console.log(airlineA.slice(airlineA.lastIndexOf(' ') + 1)); //Portugal
console.log(airlineA.slice(-2)); //al
console.log(airlineA.slice(1, -1)); //AP Air Portuga

const checkMiddleSeat = function (seat) {
    // B and E are middle seats
    const s = seat.slice(-1);
    if (s === 'B' || s === 'E') console.log('You got the middle seat 😬');
    else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');
console.log('Strings are immutable, when strings are manipulated a new string is created' +
    ' and returned:')
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));
