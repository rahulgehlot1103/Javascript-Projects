'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // if no number is entered
  if (!guess) {
    displayMessage('⛔ No Number..!!');
  }

  // when the user wins
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

  // if the user loses
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '📈 Too High..!!' : '📉 Too low..!!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost..!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again button

document.querySelector('.again').addEventListener('click', function () {
  // Resetting all the values
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  // Resetting the message area
  displayMessage('Start guessing...');
  // Resetting the input area
  document.querySelector('.guess').value = '';
  // Resetting the score area
  document.querySelector('.score').textContent = score;
  // Resetting the number area
  document.querySelector('.number').textContent = '?';

  // Resetting the CSS for the body and the number
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});
