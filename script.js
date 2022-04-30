const totalScore = 5;
let currentScore = 0;
let playerScore = 0;
let computerScore = 0;

// Randomly returns either Rock Paper or Scissors

function computerPlay() {
  const randomNumber = Math.round(Math.random() * 2);
  const array = ['rock', 'paper', 'scissors'];
  console.log(`Computer choose ${array[randomNumber]}`);
  return array[randomNumber];
}

function userPlay() {
  let userInput = prompt('Rock, Paper, or Scissors?', '');
  console.log(`Player choose ${userInput}`);
  return userInput.toLowerCase();
}

// Plays a single round of the game

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    console.log('You Win');
    currentScore += 1;
    playerScore += 1;
    isGameOver();
  } else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') ||
    (computerSelection === 'scissors' && playerSelection === 'paper') ||
    (computerSelection === 'paper' && playerSelection === 'rock')
  ) {
    console.log('You Lose!');
    currentScore += 1;
    computerScore += 1;
    isGameOver();
  } else {
    console.log('Draw');
    currentScore += 1;
  }
}

function isGameOver() {
  if (currentScore === totalScore) {
    console.log('Game Over');
    if (playerScore > computerScore) {
      console.log('Player One Wins');
    } else {
      console.log('Computer Wins');
    }
  }
}

function game() {
  while (currentScore !== 5) {
    const playerSelection = userPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
}
game();
