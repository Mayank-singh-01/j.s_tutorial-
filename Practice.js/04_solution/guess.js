let randomNumber = parseInt((Math.random() * 100 + 1 ));

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const startOver = document.querySelector('.resultParas');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

//creating paragraph
const p = document.createElement('p');

let prevGuess = [];
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
        prevGuess.push(guess);
        if (numGuess === 11 ) {
            displayGuess(guess);
            displayMassage(`Game over . random number was ${randomNumber}`);
            endGame();
        } else{ 
          displayGuess(guess);  
          checkGuess(guess); 
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        // const win = `you win this one`;   // we can use this mathod to 
        // lowOrHi.innerHTML = `${win}`
         displayMassage(`Congrats !! `);
         endGame();
    } else if (guess < randomNumber) {
        displayMassage(`Your Number is low`);
    } else if (guess > randomNumber) {
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
    lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 class="newone">Start new game </h2>`;
    startOver.appendChild(p);
    playGame = false ;
    newGame();
}

function newGame() {
    const mybutton = document.querySelector('.newone');
        mybutton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1 );
        prevGuess = [];
        numGuess = 1;
        displayMassage('');
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;

    });
}
