console.log("Page Loaded");
const choices = ['rock', 'paper', 'scissors'];

const prompt = document.querySelector('#prompt');
const playerScoreBoard = document.querySelector('#player-score');
const computerScoreBoard = document.querySelector('#computer-score');
const playerSelection = document.querySelector('#player-selection');
const computerSelection = document.querySelector('#computer-selection');

let playerScore = 0;
let computerScore = 0;

updateScores();

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = button.innerText.toLowerCase();
        const computerChoice = getComputerChoice();
        const round = playRound(playerChoice, computerChoice);

        playerSelection.textContent = button.innerText;
        computerSelection.textContent = computerChoice[0].toUpperCase() + computerChoice.substring(1);
        prompt.textContent = round;
        if (round.startsWith('You Win')) {
            playerScore++;
            updateScores();
        }
        if (round.startsWith('You Lose')) {
            computerScore++;
            updateScores();
        }
    });
});

function updateScores() {
    playerScoreBoard.textContent = `${playerScore}`;
    computerScoreBoard.textContent = `${computerScore}`;
}


function getComputerChoice() {
    const rand =  Math.random() * choices.length;
    const randomIndex = Math.floor(rand);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const youWin = `You Win. ${playerSelection} beats ${computerSelection}`;
    const youLose = `You Lose. ${computerSelection} beats ${playerSelection}`;
    const draw = `Draw. Both players chose ${playerSelection}`
    let result;
    switch (playerSelection) {
        case 'rock': {
            if (computerSelection === 'paper') result = youLose;
            if (computerSelection === 'scissors') result = youWin;
            if (computerSelection === 'rock') result = draw;
            break;
        }
        case 'paper': {
            if (computerSelection === 'paper') result = draw;
            if (computerSelection === 'scissors') result = youLose;
            if (computerSelection === 'rock') result = youWin;
            break;
        }
        case 'scissors': {
            if (computerSelection === 'paper') result = youWin;
            if (computerSelection === 'scissors') result = draw;
            if (computerSelection === 'rock') result = youLose;
            break
        }
    }
    return result;
}


