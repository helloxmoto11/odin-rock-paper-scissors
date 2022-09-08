console.log("Page Loaded");
const choices = ['rock', 'paper', 'scissors'];
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');

let playerScore = 0;
let computerScore = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', (e) => {
        const playerChoice = button.innerText.toLowerCase();
        const computerChoice = getComputerChoice();
        const round = playRound(playerChoice, computerChoice);
        console.log(round);
        if (round.startsWith('You Win')) {
            playerScore++;
        } else {
            computerScore++;
        }
    });
});


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


