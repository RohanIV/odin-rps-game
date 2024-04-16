function getComputerChoice() {
    const rps = ["🗻", "📜", "✂"];
    return rps[Math.floor(Math.random() * rps.length)];
}

function playRound(playersChoice, computersChoice) {

    if (playersChoice === computersChoice) {
        return "draw";
    } else if ((playersChoice === "🗻" && computersChoice === "✂") ||
               (playersChoice === "📜" && computersChoice === "🗻") ||
               (playersChoice === "✂" && computersChoice === "📜")) {
        return "player";
    } else {
        return "computer";
    }
}


function game() {
    const player_ui = document.getElementById("player-ui");
    const com_ui = document.getElementById("com-ui");
    const player_score = document.getElementById("player-score");
    const com_score = document.getElementById("com-score");
    const message = document.getElementById("text");
    const buttons = document.querySelectorAll("#button-container .rps");

    

    let playerScore = 0;
    let computerScore = 0;


        function buttonClicked(event) {
                const playerChoice = event.target.value;
                player_ui.textContent = `${playerChoice}`;
            
            const computerChoice = getComputerChoice();

            player_ui.textContent = `${playerChoice}`;
            com_ui.textContent = `${computerChoice}`;

            const result = playRound(playerChoice, computerChoice);

            if (result === "draw") {
                message.textContent = "It's a draw.";
            } else if (result === "player") {
                playerScore++;
                message.textContent = "You win this round.";
            } else{
                result === "computer"
                computerScore++;
                message.textContent = "Computer wins this round.";
            }

            player_score.textContent = ` ${playerScore}`;
            com_score.textContent = ` ${computerScore}`;

            if (playerScore === 5 || computerScore === 5) {
                if (playerScore > computerScore) {
                    message.textContent = "You win the game!";
                } else {
                    message.textContent = "Computer wins the game!";
                }
                // Disable all buttons to stop the game
                buttons.forEach(button => {
                    button.disabled = true;
                });
        }
    }
    
       
    
    buttons.forEach(button => {
        button.addEventListener('click', buttonClicked);
    });

     document.getElementById("reset").onclick = () => {
        location.reload();
    };

}


game();