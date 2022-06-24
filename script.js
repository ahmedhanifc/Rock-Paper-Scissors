// Variables

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');
const playerMoveText = document.querySelector('.player-move');
const computerMoveText = document.querySelector('.computer-move');
const winnerText = document.querySelector('.winner');
const playerScore = document.querySelector('.player_score');
const computerScore = document.querySelector('.computer_score');

let playerMove;
let computerMove;
let player_score = 0;
let computer_score = 0;
//--------------------------------------------------------------------------<>-------------------------------------------------------------------

// Game Moves

rockButton.addEventListener('click', (e) => {
  textReset();
  playerMove = 'rock';
  computerMove = computerSelection();
  gameLogic(playerMove, computerMove);
  textContent();
  isGameOver();
});

paperButton.addEventListener('click', () => {
  textReset();
  playerMove = 'paper';
  computerMove = computerSelection();
  gameLogic(playerMove, computerMove);
  textContent();
});

scissorButton.addEventListener('click', () => {
  textReset();
  playerMove = 'scissor';
  computerMove = computerSelection();
  gameLogic(playerMove, computerMove);
  textContent();
});

function computerSelection() {
  const array = ['rock', 'paper', 'scissor'];
  return array[randomNumber()];
}

// ------------------------------------------------------------------------------<>---------------------------------------------------------------
// Game Logic

function gameLogic(player, computer) {
  if (
    (player == 'rock' && computer == 'scissor') ||
    (player == 'paper' && computer == 'rock') ||
    (player == 'scissor' && computer == 'paper')
  ) {
    winnerText.textContent = 'Player Wins';
    player_score += 1;
    score();
  } else if (
    (player == 'scissor' && computer == 'rock') ||
    (player == 'rock' && computer == 'paper') ||
    (player == 'paper' && computer == 'scissor')
  ) {
    winnerText.textContent = 'Computer Wins';
    computer_score += 1;
    score();
  } else {
    winnerText.textContent = 'Draw';
  }
}

function isGameOver() {
  if (player_score >= 5 || computer_score >= 5) {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
  }
}
// ------------------------------------------------------------------------------<>---------------------------------------------------------------
// Random Number Generator

function randomNumber() {
  let number = Math.round(Math.random() * 2);
  return number;
}

// ------------------------------------------------------------------------------<>---------------------------------------------------------------
// HTML WORK

function textContent() {
  playerMoveText.textContent = `You Played: ${playerMove}`;
  computerMoveText.textContent = `Computer Played: ${computerMove}`;
}

function textReset() {
  winnerText.textContent = '';
}

function score() {
  playerScore.textContent = player_score;
  computerScore.textContent = computer_score;
}
