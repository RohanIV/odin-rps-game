function getComputerChoice() {
    const rps = ["ROCK", "PAPER", "SCISSORS"];
    return rps[Math.floor(Math.random() * rps.length)];
}

// function getPlayerChoice(choice) {
//     return choice.toUpperCase();
// }

function playRound(playersChoice, computersChoice) {
    const rock = document.getElementById("rock").value;
    const paper = document.getElementById("paper").value;
    const scissors = document.getElementById("scissors").value;

    if (playersChoice === computersChoice) {
        return "draw";
    } else if ((playersChoice === rock && computersChoice === "SCISSORS") ||
               (playersChoice === paper && computersChoice === "ROCK") ||
               (playersChoice === scissors && computersChoice === "PAPER")) {
        return "player";
    } else {
        return "computer";
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;

    // for (let i = 0; i < 5; i++) {
        // const playerChoice = getPlayerChoice(prompt("Enter Rock, Paper, or Scissors:"));
        const computerChoice = getComputerChoice();
        console.log(`Player choice: ${playerChoice}`);
        console.log(`Computer choice: ${computerChoice}`);

        const result = playRound(playerChoice, computerChoice);

        if (result === "draw") {
            console.log("It's a draw.");
        } else if (result === "player") {
            playerScore++;
            console.log("Player wins this round.");
        } else if (result === "computer") {
            computerScore++;
            console.log("Computer wins this round.");
        } else {
            console.log("Not a valid choice. Try again.");
            i--; // This ensures that invalid attempts don't count as rounds.
        }

        console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
    // }

    if (playerScore > computerScore) {
        console.log("Player wins the game!");
    } else if (computerScore > playerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("The game ends in a draw!");
    }

}


function display(){
    document.getElementById("text").textContent = document.getElementById("rock").value;
}

document.getElementById("rock").addEventListener("click", display);




game();
