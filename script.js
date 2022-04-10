console.log("Hello");

function computerPlay() {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) return "It is a tie!"
    else if (playerSelection == "rock")
    {
        if (computerSelection == "paper") return "You lose! Paper beats Rock";
        else if (computerSelection == "scissors") return "You win! Rock beats Scissors";
    }
    else if (playerSelection == "paper") // Player selection is Paper
    {
        if (computerSelection == "scissors") return "You lose! Scissors beats Paper";
        else if (computerSelection == "rock") return "You win! Paper beats Rock";
    }
    else if (playerSelection == "scissors") // Player selection is Scissors
    {
        if (computerSelection == "rock") return "You lose! Rock beats Scissors";
        else if (computerSelection == "paper") return "You win! Scissors beats Paper";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(window.prompt("Please enter your selection"), computerPlay()));
     }
}

game()