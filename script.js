
function getComputerChoice() {
   let options = ["rock", "paper", "scissors"];
   let choice = Math.floor(Math.random() * options.length);
   return options[choice]
}

function playRound(playersSelection, computerSelection) {
    playersSelection.toLowerCase();
    if (playersSelection === computerSelection) {
        return "It's a tie";
    } else if (playersSelection === "rock" && computerSelection === "paper") {
        return "You lose :( paper beats rock";
    } else if (playersSelection === "paper" && computerSelection === "scissors") {
        return "You lose :( scissors beats paper";
    } else if (playersSelection === "scissors" && computerSelection === "rock") {
        return "You lose :( rock beats scissors";
    } else if (playersSelection === "paper" && computerSelection === "rock") {
        return "You win :) paper beats rock";
    } else if (playersSelection === "scissors" && computerSelection === "paper") {
        return "You win :) scissors beats paper";
    } else if (playersSelection === "rock" && computerSelection === "scissors") {
        return "You win :) rock beats scissors";
    } else {
        return "Please enter a correct option";
    }
}

function game() {
    x = 0
    playersScore = 0 
    computersScore = 0
    while (x < 5) {
        x++
        playersSelection = prompt("Enter rock, paper or scissors");
        computerSelection = getComputerChoice();
        let result = playRound(playersSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playersScore++;
        } else if (result.includes("tie")) {
            playersScore++;
            computersScore++;
        } else if (result.includes("lose")) {
            computersScore++;
        } else if (result.includes("option")) {
            x--;
        }
    }
    if (playersScore > computersScore) {
        console.log("Player wins! " + String(playersScore) +  " - " + String(computersScore));
    } else if (playersScore < computersScore) {
        console.log("Computer wins! " + String(computersScore) + " - " + String(playersScore));
    } else if (playersScore === computersScore) {
        console.log("It's a tie" + String(computersScore) + " - " + String(playersScore))
    }
}


    