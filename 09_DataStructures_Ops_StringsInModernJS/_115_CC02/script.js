'use strict';

///////////////////////////////////////
// Coding Challenge #2

/*
Let's continue with our football betting app!
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
GOOD LUCK 😀
*/

// Source Objects:

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
    printGoals: function(...playerNames) {
        console.log('Total goals: ', playerNames.length);
        console.log('GOAL SCORERS:')
        for (const playerName of playerNames) {
            console.log(playerName)
        }
    }
};

console.log('1.///////////////////////////');
console.log("1. Loop over the game.scored array and print each player name to the console, along" +
    " with the goal number (Example: 'Goal 1: Lewandowski')");

const scoredArray = game?.scored ?? 'scored property does not exist.';

for (const scorer of scoredArray) {
    console.log(scorer);
}

console.log('In order to get number though for(const [index, value] of scoredArray.entries()');

for (const [index, scorer] of scoredArray.entries()) {
    console.log(`Goal ${index + 1}: ${scorer}`);
}

console.log('2.///////////////////////////');
console.log("2. Use a loop to calculate the average odd and log it to the console (We already" +
    " studied how to calculate averages, you can go check if you don't remember)");

const gameOdds = Object(game.odds);

console.log("Raw gameOdds Object", gameOdds);

const gameOddsArray = Object.entries(gameOdds);

let totalOdds = 0;
for (const [result, odds] of gameOddsArray) {
    totalOdds += odds;
    console.log(totalOdds);
}

console.log('Average odds = ', (totalOdds/ gameOddsArray.length).toFixed(2));

// His solution:
let average =0;
for (const odd of Object.values(game.odds)) {
    average += odd;
}
average /= Object.values(game.odds).length;

console.log(average.toFixed(2));

console.log('3.///////////////////////////');
console.log("3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:" +
    "Odd of victory Bayern Munich: 1.33" +
    "Odd of draw: 3.25" +
    "Odd of victory Borrussia Dortmund: 6.5" +
    "Get the team names directly from the game object, don't hardcode them (except for 'draw')." +
    " HINT: Note how the odds and the game objects have the same property names 😉");

console.log(gameOddsArray);
for (const [result, odds] of gameOddsArray) {
    let output = '';
    output += 'Odds for ';
    output += game?.[result] ?? 'draw:'; // game.x does not exist
    output += ' ' + odds;
    console.log(output);
}
console.log('YAY!')

// His solution:
console.log('course solution:////////////')
for (const [result, odds] of Object.entries(game.odds)) {
    const resultStr = result === 'x' ? 'draw': ` victory ${game[result]} `;
    console.log(`odd of ${resultStr} ${odds}`);
}

console.log('BONUS.///////////////////////////');
console.log("BONUS: Create an object called 'scorers' which contains the names of the players who scored as" +
" properties, and the number of goals as the value. In this game, it will look like this:\n" +
"{\n" +
"Gnarby: 1,\n" +
"Hummels: 1,\n" +
"Lewandowski: 2\n" +
    "}");

const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
const counts = {};

for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}

//console.log(counts[5], counts[2], counts[9], counts[4]);
console.log(counts);



const scorers = game.scored;
const goalsbyScorer = {};

for (const scorer of scorers)
    goalsbyScorer[scorer] = goalsbyScorer[scorer]  ? goalsbyScorer[scorer] +1 : 1;


console.log(goalsbyScorer);

console.log('///////////BONUS course solution');
// BONUS
// So the solution is to loop over the array, and add the array elements as object properties, and then increase the count as we encounter a new occurence of a certain element
const scorers1 = {};
for (const player of game.scored) {
    scorers1[player] ? scorers1[player]++ : (scorers1[player] = 1);
}

console.log(scorers1);


