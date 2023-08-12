'use strict';

/*
// Reading the content of the element
console.log(document.querySelector('.message').textContent);

// Changing the content of the element 
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);


document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 123;



// setting the value of the element
document.querySelector('.guess').value = 23;

// getting the value of the element
console.log(document.querySelector('.guess').value);
*/

// Defining the secret random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// defining the score variable
let score = 20;
// defining the highscore variable
let highscore = 0;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
} 

// Getting the value on-click
// using the event listener
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#56AA3F';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // Refactoring the code
  // When the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high..!!' : '📉 Too low..!!');   
      score--;
      document.querySelector('.score').textContent = score;
    } else {
       displayMessage('💣 You lost');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  /*
  else if(guess > secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📈 Too high..!!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = '💣 You lost';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too low
  else if(guess < secretNumber){
    if(score > 1){
      document.querySelector('.message').textContent = '📉 Too low..!!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      document.querySelector('.message').textContent = '💣 You lost';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

// Coding Challenge - 1

// Select the element with the 'again' class and attach a click event handler
document.querySelector('.again').addEventListener('click', function () {
  // In the handler function, restore initial value of the score and secretNumber variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Restore the initial conditions of the message, number, score and guess input field
   displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  // Restore the original background colorand number width
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});
