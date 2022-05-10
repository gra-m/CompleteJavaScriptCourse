"use strict";

/*⛔️ 🎉 📈 📉 💥 */
let score = 20;
let secretNumber;
let highScore = 0;
const checkButton = document.querySelector('.check');
const messageBox = document.querySelector('.message');
const againButton = document.querySelector('.again');
const highScoreDisplay = document.querySelector('.highScore');
const scoreDisplay = document.querySelector('.score');
const guessInputField = document.querySelector('.guess');





const createSecretNumber = function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
}

createSecretNumber();

document.querySelector('.score')
    .textContent = score;

function againCheckToggle() {
    if(againButton.classList.contains('disable')){
        againButton.classList.remove('disable');
        checkButton.classList.add('disable');
    } else {
        againButton.classList.add('disable');
        checkButton.classList.remove('disable');
    }
}

function lostGame() {
   messageBox.textContent = '💥 No more guesses, you lost the game..'
    againCheckToggle();
}

function displayMessage(messageText) {
    messageBox.textContent = messageText;
}


function refreshScore() {
    --score;
    document.querySelector('.score').textContent = String(score);
     if (score === 0)
       lostGame();
}


function checkIfHighScore() {
    if (score > highScore) {
        highScore = score;
        highScoreDisplay.textContent = highScore;
    }
}

function correctGuess() {
    showNumber();
    displayMessage('🎉 Correct Number!');
    document.querySelector('body')
        .style.backgroundColor = '#60b347';
    document.querySelector('.number')
        .style.width = '30rem';
}

checkButton.addEventListener
('click', function () {
    const guess = Number(guessInputField.value);
    console.log(guess, typeof guess);
    if (!guess) {
        displayMessage('⛔️ Wrong input!');
    } else if (guess === secretNumber) {
        correctGuess();
        refreshScore();
        checkIfHighScore();
        againCheckToggle();
    } else {
        displayMessage((guess > secretNumber) ? 'Too High!':'Too Low!');
        refreshScore();
    }
});

function showNumber() {
    document.querySelector('.number')
        .textContent = secretNumber;
}

againButton.addEventListener
('click', function () {
    againCheckToggle()
    document.querySelector('body')
        .style.backgroundColor = '#222';
    document.querySelector('.number')
        .style.width = '15rem';
    displayMessage('Start guessing...');
    score = 20;
    scoreDisplay.textContent = score;
    createSecretNumber();
    document.querySelector('.number')
        .textContent = '?';
    document.querySelector('.guess').value = '';
})


