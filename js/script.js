function get_computer_choice() {
    const rps = ["ROCK", "PAPER", "SCISSORS"];

    let cpu_choice = rps[Math.floor(Math.random() * rps.length)];
    console.log(cpu_choice);

    return cpu_choice;
}

function get_player_choice(choice) {
    let upper = choice.toUpperCase();

    console.log(upper);
    return upper;
}

function play_round(players_choice, compuetrs_choice) {

        if (players_choice == compuetrs_choice) {
            return "It is a draw";
        } else if (players_choice == "ROCK" && compuetrs_choice == "SCISSORS") {
            return "Player Wins";
        } else if (players_choice == "ROCK" && compuetrs_choice == "PAPER") {
            return "Computer Wins";
        } else if (players_choice == "PAPER" && compuetrs_choice == "ROCK") {
            return "Player Wins";
        } else if (players_choice == "PAPER" && compuetrs_choice == "SCISSORS") {
            return "Computer Wins";
        } else if (players_choice == "SCISSORS" && compuetrs_choice == "PAPER") {
            return "Player Wins";
        } else if (players_choice == "SCISSORS" && compuetrs_choice == "ROCK") {
            return "Computer Wins";
        }else{
            return "Not Valid";
        }
}


let players_choice = get_player_choice("paper");
let computers_choice = get_computer_choice();

console.log(play_round(players_choice, computers_choice));


