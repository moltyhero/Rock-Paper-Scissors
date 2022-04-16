console.log("Hello");

function computerPlay()
{
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) return 0;
    else if (playerSelection == "rock")
    {
        if (computerSelection == "paper") return -1;
        else if (computerSelection == "scissors")
            return 1;
    } 
    else if (playerSelection == "paper")
    {
        // Player selection is Paper
        if (computerSelection == "scissors")
            return -1;
        else if (computerSelection == "rock") return 1;
    } 
    else if (playerSelection == "scissors")
    {
        // Player selection is Scissors
        if (computerSelection == "rock") return -1;
        else if (computerSelection == "paper")
            return 1;
    }
}

function game()
{
    // for (let i = 0; i < 5; i++)
    // {
    //     console.log(
    //         playRound(window.prompt("Please enter your selection"), computerPlay())
    //     );
    // }

}

//game();

// const rockBtn = document.getElementById("Rock");
// const paperBtn = document.getElementById("Paper");
// const scissorsB = document.getElementById("Scissors");
const resultDiv = document.getElementById("Results");
const winnerDiv = document.getElementById("Winner");

const buttons = document.querySelectorAll('button');

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let currentScore = playRound(button.id, computerPlay())
        if (currentScore > 0)
            playerScore++;
        else
            computerScore++;
        resultDiv.innerText = `Your Score: ${playerScore}, Computer Score: ${computerScore}`;

        if (playerScore === 5)
            winnerDiv.innerText = "You are the winner!";
        else if (computerScore === 5)
            winnerDiv.innerText = "You lost!";
    })
})