function computerChoice () {
   
    let random = Math.random();
    if (random < 0.33) {
        random = ("rock");
    }
    
    else if (random <= 0.66 && random > 0.33) {
        random = ("paper");
    }

    else if (random < 1 && random > 0.66) {
        random = ("scissors");
    }
  
    return random;
}  





function game (player, computer) {

    if (player == "rock") {
        if (computer =="rock") {
            return tie;
        }
        else if (computer == "scissors") {
            userScore++;
            return win;
          
        }
        else {
            computerScore++;
            return lose;
            
        }
    
    }

if (player == "paper") {
    if (computer =="paper") {
        return tie;
    }
    else if (computer == "scissors") {
        computerScore++;
        return lose;
        
    }
    else{
        userScore++;
        return win;
        
    }

}


if (player == "scissors") {
    if (computer =="scissors") {
        return tie;
    }
    else if (computer == "paper") {
        userScore++;
        return win;
       
    }
    else {
        computerScore++;
        return lose;
        
    }

}

}

let tie = "it's a tie";
let win = "you win";
let lose = "you lose";
let userScore = parseInt(0);
let computerScore = parseInt(0);

for (i=0; i < 5; i++) {
let playerChoice = prompt ("choose between rock, paper and scissors");
playerChoice = playerChoice.toLowerCase();
const compChoice = computerChoice ();
console.log ("You picked : " + playerChoice);
console.log ("Computer picked : " + compChoice);
console.log (game (playerChoice, compChoice));
console.log ("Your score = " + userScore);
console.log ("Computer score = " + computerScore);
}