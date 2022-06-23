// Rock Paper and Scissor Buttons:

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector('.scissor');

//--------------------------------------------------------------------------<>-------------------------------------------------------------------

// Player Move
let playerMove;

// Event Listeners
rockButton.addEventListener('click', (e) => {
  playerMove = 'rock';
});

paperButton.addEventListener('click', () => {
  playerMove = 'paper';
});

scissorButton.addEventListener('click', () => {
  playerMove = 'scissor';
});

// ------------------------------------------------------------------------------<>---------------------------------------------------------------
// AI Logic

const gameMoves = ['rock', 'paper', 'scissor'];
let number = Math.round(Math.random() * 2);
gameMoves[number];

// ------------------------------------------------------------------------------<>---------------------------------------------------------------

// Game Winner

// ------------------------------------------------------------------------------<>---------------------------------------------------------------
