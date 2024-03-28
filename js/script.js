function get_computer_choice(){
    const rps = ["ROCK", "PAPER", "SCISSORS"];

    let cpu_choice = rps[Math.floor(Math.random() * rps.length)];
    console.log(cpu_choice);

    return cpu_choice;

    
}

function get_player_choice(choice){
    let upper = choice.toUpperCase();

    console.log(upper);
    return upper;
}

function play_round(players_choice, compuetrs_choice){
    let player_score = 0;
    let computer_score = 0;

   if(players_choice == compuetrs_choice){
        return "It is a draw";
   }else{
    return "win";
   }

   console.log(choice);

    // let players_choice = "rock";
}

let players_choice = get_player_choice("");
let computers_choice = get_computer_choice();

console.log(play_round(players_choice, computers_choice));


