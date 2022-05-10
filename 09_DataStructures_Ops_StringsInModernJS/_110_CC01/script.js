'use strict';

/*
1. Create one player array for each team (variables:
'players1' and 'players2');
2. Create variable 'gk' and 'fieldPlayers for Bayern.
The first player is always gk.
3. Create array all players with all 22 players.
4. Bayern used 3 substitutes, create an array 'playersFinal'
containing all original players and Thiago, Couthino and Perisic.
5. Based on game odds object deconstruct into variables
called team1, draw and team2.
6. Add printGoals: function('player', 'names') that
prints goalscorers names to the console and the number
of goals scored (number of players passed in).
7. Team with lower odds is more likely to win. Print
team most likely to win, WITHOUT using if/else or a ternary.

TEST DATA for 6:
'Davies', 'Muller', 'Lewandowski', 'Kimmich'.
Then call function again with players from game.scored
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

/*1. Create one player array for each team (variables:
'players1' and 'players2');*/
const [players1a] = [game.players[0]];

const [players2a] = [game.players[1]];

console.log('Noooooooo!')
console.log('const [players1a] = [game.players[0]]:', players1a);
console.log('const [players2a] = [game.players[1]]:', players2a);

console.log('Easier!')
const [players1, players2] = game.players;
console.log('const [players1, players2] = game.players;', players1);
console.log('and players2: ',players2);

console.log('2////////////////////////////2')
/*2. Create variable 'gk' and 'fieldPlayers for Bayern.
The first player is always gk.
*/

console.log('...REST packs fieldplayers together');
const [gk1, ...fieldplayers1] = players1;
console.log(gk1, fieldplayers1);

const [gk2, ...fieldplayers2] = players2;
console.log(gk2, fieldplayers2);

console.log('3////////////////////////////3')
/*3. Create array all players with all 22 players.*/

const allPlayers = [...players1, ...players2];

console.log('const allPlayers = [...players1, ...players2];===\n', allPlayers);

console.log('4////////////////////////////4')
/*4. Bayern used 3 substitutes, create an array 'playersFinal'
containing all original players and Thiago, Couthino and Perisic.*/

const playersFinal = [...players1,'Thiago', 'Couthino', 'Perisic'];

console.log(playersFinal);

console.log('5////////////////////////////5')
/*5. Based on game odds object deconstruct into variables
called team1, draw and team2.
*/

const {team1, x:draw, team2} = game.odds;
console.log('const {team1, x:draw, team2} = game.odds')
console.log("Odds: ", team1, draw, team2);

console.log('OR:')

const{odds:{team1:wibble, x:draw2, team2:wobble}} = game;
console.log('const{odds:{team1:wibble, x:draw2, team2:wobble}} = game;')
console.log('Destructured from game object: ', wibble, draw2, wobble);

console.log('6////////////////////////////6')
/*6. Add printGoals: function('player', 'names') that
prints goalscorers names to the console and the number
of goals scored (number of players passed in).*/

//game.printGoals(players2);// NO, spread before call:
game.printGoals(...players1);
game.printGoals('Harold', 'Lloyd');

console.log('7////////////////////////////7')
/*7. Team with lower odds is more likely to win. Print
team most likely to win, WITHOUT using if/else or a ternary.*/

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
