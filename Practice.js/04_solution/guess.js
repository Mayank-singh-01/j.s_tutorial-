let mynum = parseInt((Math.random() * 100 + 1 ));

const userInput = document.querySelector('#guessField');
const submit = document.querySelector('#submit');
const resultPara = document.querySelector('.resultPara');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//creating paragraph
const p = document.createElement('p');

let preveGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click' , function (submitStop) {
     submitStop.preventDefault();   
     const guess = parseInt(userInput.value);
     validateGuess(guess);
    });
}

function validateGuess(guess) {
    if ( isNaN(guess)) {
        alert('Please enter a valid number');
    } else if (guess < 1 ) {
        alert('Please enter a number more then 1');
    } else if (guess > 100 ) {
        alert('Please enter a number less then 100');
    } else { 
        preveGuess.push(guess);
        if (numGuess === 11 ) {
            displayGuess(guess);
            displayMassage(`Game over . randim number was ${randomNumber}`);
            endGame();
        } else{ 
          displayGuess(guess);  
          checkGuess(guess); 
        }
    }
}

function checkGuess(guess) {
    if (guess === mynum) {
        // const win = `you win this one`;   // we can use this mathod to 
        // lowOrHi.innerHTML = `${win}`
         displayMassage(`Congrats !! `);
         endGame();
    } else if (guess < mynum) {
        displayMassage(`Your Number is low`);
    } else if (guess > mynum) {
        displayMassage(`your Number is High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMassage(massage) {
    lowOrHi.innerHTML = `<h2>${massage}</h2>`
}

function endGame(params) {
    
}

function startGame(params) {
    
}
