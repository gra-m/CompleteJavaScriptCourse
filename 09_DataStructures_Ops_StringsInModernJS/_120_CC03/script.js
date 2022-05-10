'use strict';
///////////////////////////////////////
// Coding Challenge #3

/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
    [17, '⚽️ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽️ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽️ GOAL'],
    [80, '⚽️ GOAL'],
    [92, '🔶 Yellow card'],
]);

console.log('////////////////////////////////////////////////////////////////////////////');
console.log("1. Create an array 'events' of the different game events that happened (no" +
    " duplicates)")

const eventSet = new Set(gameEvents.values()); // grab map values
console.log(eventSet);

const occuredEventArray = [...eventSet]; // Spread set into array.

console.log(occuredEventArray);

console.log('////////////////////////////////////////////////////////////////////////////');
console.log('Do it in one step:')

const eventSet1Step = [...new Set(gameEvents.values())];

console.log(eventSet1Step);

console.log('////////////////////////////////////////////////////////////////////////////');
console.log("2. After the game has finished, is was found that the yellow card from minute 64" +
    " was unfair. So remove this event from the game events log.");

gameEvents.delete(64);
console.log(gameEvents);


console.log('////////////////////////////////////////////////////////////////////////////');
console.log("3. Print the following string to the console: 'An event happened, on average, every 9 minutes' (keep in mind that a game has 90 minutes)");

const eventsOccurredAverage = function(eventMap) {
    const eventKeys = [...eventMap.keys()];
    console.log(eventKeys);
    const entryTally = eventKeys.length;
    const lastEntry = eventKeys.pop();
    console.log(`An event happened on average every ${Math.round(lastEntry/entryTally)} minutes`);
}

eventsOccurredAverage(gameEvents);

console.log('////////////////////////////////////////////////////////////////////////////');
console.log('Chained pop');

console.log(`Gebeurd er gemiddeld iets elke ${90/gameEvents.size} minuten`);

const chainedPop = [...gameEvents.keys()].pop();

console.log('Chained Pop', chainedPop);



console.log('////////////////////////////////////////////////////////////////////////////');
console.log("4. Loop over the events and log them to the console, marking whether it's in the" +
    " first half or second half (after 45 min) of the game, like this: [FIRST HALF] 17: ⚽️ GOAL");

const printActionByHalf = (eventMap => {
   for (const [time, event] of eventMap) {
       if (time < 45) {
           console.log(`[FIRST HALF] ${time}: ${event}`);
       }
       else {
           console.log(`[SECOND HALF] ${time}: ${event}`);
       }
   }
});

printActionByHalf(gameEvents);

console.log('////////////////////////////////////////////////////////////////////////////');

const courseActionByHalf = (eventMap => {
  for (const [min, event] of eventMap)   {
      const half = min < 45 ? 'FIRST': 'SECOND';
      console.log(`[${half} HALF] ${min}: ${event}`);
  }
});

courseActionByHalf(gameEvents);




