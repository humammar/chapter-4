


//...................FAILED TO MAKE THE OOP FORMAT VER..................//
//.....THE FUNCTION FORMAT IS ATTACHED AT THE BOTTOM OF THIS SCRIPT.....//





// class Configuration {
//     static gameOption = ["rock", "paper", "scissors"];
//     isGameAlreadyBeenPlayed = false;
// }

// class Game {
//     handleClick(e) {
//         const playerTurn = e.playerChoose;
//             if (Configuration.isGameAlreadyBeenPlayed === false) {
//             console.log("player", this.playerChoose);    
//             const computerChoose = this.computerTurn();
//             const winner = Utility.winnerResult(this.playerChoose, this.computerChoose);

//             console.log("computerChoose", this.computerChoose)
//             console.log("The Result is", this.winner);
//             Utility.playerIndicatorBackground(this.playerChoose);
//             Utility.computerIndicatorBackground(this.computerChoose);
//             Utility.resultCard(this.winner);
//             Configuration.isGameAlreadyBeenPlayed = true;
//         }    
    
//     }

//     computerTurn = () => {
//         let index = this.generateRandom(3);
//         console.log("index", index);
//         return Configuration.gameOption[index];
//     }

//     generateRandom(maxLimit = 3) {
//         let rand = Math.random() * maxLimit;
//         rand = Math.floor(rand);
//         return rand;
//     }

//     refreshButton = () => {  
//         Configuration.isGameAlreadyBeenPlayed = false;
//         let refreshPlayerChosenOption = document.getElementsByClassName
//         ("chosenIndicator");
//         if (this.refreshPlayerChosenOption.length > 0) {
//             this.refreshPlayerChosenOption[0].classList.remove("chosenIndicator");
//         };
        
//         let refreshComputerChosenOption = document.getElementsByClassName
//         ("chosenIndicator-2");
//         if (this.refreshComputerChosenOption.length > 0) {
//             this.refreshComputerChosenOption[0].classList.remove("chosenIndicator-2");
//         }
//     }

// }

// class Utility {
//     winnerResult = (playerInput, computerInput) => {
//         if (playerInput === "rock") {
//             if(computerInput === "rock") {
//                 return "draw";
//             } else if (computerInput === "paper") {
//                 return "lose";
//             } else {
//                 return "win"
//             }
//         }
//         else if (playerInput === "paper") {
//             if(computerInput === "rock") {
//                 return "win";
//             } else if (computerInput === "paper") {
//                 return "draw";
//             } else {
//                 return "lose"
//             }
//         }
//         else if (playerInput === "scissors") {
//             if(computerInput === "rock") {
//                 return "lose";
//             } else if (computerInput === "paper") {
//                 return "win";
//             } else {
//                 return "draw"
//             }
//         }
//     }
//     resultCard = (result) => {
//         if (result === "win") {
//             let winResult = document.getElementById("card");
//             this.winResult.innerHTML = `<span class="cardShape">Player<br>Win</span>`;        
//         } else if (result === "lose") {
//             let winResult = document.getElementById("card");
//             this.winResult.innerHTML = `<span class="cardShape">Com<br>Win</span>`;
//         } else {
//             let winResult = document.getElementById("card");
//             this. winResult.innerHTML = `<span class="cardShape rectangle draw">Draw</span>`;
//         }
//     }
//     playerIndicatorBackground = (choice) => {
//         let rockChosenByPlayer = document.getElementById("playerRock");
//         let paperChosenByPlayer = document.getElementById("playerPaper");
//         let scissorsChosenByPlayer = document.getElementById("playerScissors");

//         let chosenAlready = document.getElementsByClassName("chosenIndicator"); 

//         if(this.chosenAlready.length > 0) {
//             this.chosenAlready[0].classList.remove("chosenIndicator");
//         }

//         if (choice === "rock") {
//             this.rockChosenByPlayer.classList.add("chosenIndicator");

//         } else if (choice == "paper") {        
//             this.paperChosenByPlayer.classList.add("chosenIndicator");
//         } else {        
//             this.scissorsChosenByPlayer.classList.add("chosenIndicator");
//         }
//     }

//     computerIndicatorBackground = (choice) => {
//         let rockChosenByComputer = document.getElementById("computerRock");
//         let paperChosenByComputer = document.getElementById("computerPaper");
//         let scissorsChosenByComputer = document.getElementById("computerScissors");

//         let chosenAlready = document.getElementsByClassName("chosenIndicator-2"); 

//         if(this.chosenAlready.length > 0) {
//             this.chosenAlready[0].classList.remove("chosenIndicator-2");
//         }

//         if (choice === "rock") {
//             this.rockChosenByComputer.classList.add("chosenIndicator-2");

//         } else if (choice == "paper") {        
//             this.paperChosenByComputer.classList.add("chosenIndicator-2");
//         } else {        
//             this.scissorsChosenByComputer.classList.add("chosenIndicator-2");
//         }
//     }
// }



//............................FUNCTION FORMAT...........................//



const gameOption = ["rock", "paper", "scissors"];
let isGameAlreadyBeenPlayed = false;

playerTurn = (playerChoose) => {
    if (isGameAlreadyBeenPlayed === false) {
        console.log("player", playerChoose);    
        const computerChoose = computerTurn();
        const winner = winnerResult(playerChoose, computerChoose);

        console.log("computerChoose", computerChoose)
        console.log("The Result is", winner);
        playerIndicatorBackground(playerChoose);
        computerIndicatorBackground(computerChoose);
        resultCard(winner);
        isGameAlreadyBeenPlayed = true;
    }    
}

computerTurn = () => {
    let index = generateRandom(3);
    console.log("index", index);
    return gameOption[index];
}

function generateRandom(maxLimit = 3) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand);
    return rand;
}

winnerResult = (playerInput, computerInput) => {
    if (playerInput === "rock") {
        if(computerInput === "rock") {
            return "draw";
        } else if (computerInput === "paper") {
            return "lose";
        } else {
            return "win"
        }
    }
    else if (playerInput === "paper") {
        if(computerInput === "rock") {
            return "win";
        } else if (computerInput === "paper") {
            return "draw";
        } else {
            return "lose"
        }
    }
    else if (playerInput === "scissors") {
        if(computerInput === "rock") {
            return "lose";
        } else if (computerInput === "paper") {
            return "win";
        } else {
            return "draw"
        }
    }
}

resultCard = (result) => {
    if (result === "win") {
        let winResult = document.getElementById("card");
        winResult.innerHTML = `<span class="cardShape">Player<br>Win</span>`;        
    } else if (result === "lose") {
        let winResult = document.getElementById("card");
        winResult.innerHTML = `<span class="cardShape">Com<br>Win</span>`;
    } else {
        let winResult = document.getElementById("card");
        winResult.innerHTML = `<span class="cardShape rectangle draw">Draw</span>`;
    }
}

refreshButton = () => {  
    isGameAlreadyBeenPlayed = false;
    let refreshPlayerChosenOption = document.getElementsByClassName
    ("chosenIndicator");
    if (refreshPlayerChosenOption.length > 0) {
        refreshPlayerChosenOption[0].classList.remove("chosenIndicator");
    };
    
    let refreshComputerChosenOption = document.getElementsByClassName
    ("chosenIndicator-2");
    if (refreshComputerChosenOption.length > 0) {
        refreshComputerChosenOption[0].classList.remove("chosenIndicator-2");
    }
}

playerIndicatorBackground = (choice) => {
    let rockChosenByPlayer = document.getElementById("playerRock");
    let paperChosenByPlayer = document.getElementById("playerPaper");
    let scissorsChosenByPlayer = document.getElementById("playerScissors");

    let chosenAlready = document.getElementsByClassName("chosenIndicator"); 

    if(chosenAlready.length > 0) {
        chosenAlready[0].classList.remove("chosenIndicator");
    }

    if (choice === "rock") {
        rockChosenByPlayer.classList.add("chosenIndicator");

    } else if (choice == "paper") {        
        paperChosenByPlayer.classList.add("chosenIndicator");
    } else {        
        scissorsChosenByPlayer.classList.add("chosenIndicator");
    }
}

computerIndicatorBackground = (choice) => {
    let rockChosenByComputer = document.getElementById("computerRock");
    let paperChosenByComputer = document.getElementById("computerPaper");
    let scissorsChosenByComputer = document.getElementById("computerScissors");

    let chosenAlready = document.getElementsByClassName("chosenIndicator-2"); 

    if(chosenAlready.length > 0) {
        chosenAlready[0].classList.remove("chosenIndicator-2");
    }

    if (choice === "rock") {
        rockChosenByComputer.classList.add("chosenIndicator-2");

    } else if (choice == "paper") {        
        paperChosenByComputer.classList.add("chosenIndicator-2");
    } else {        
        scissorsChosenByComputer.classList.add("chosenIndicator-2");
    }
}


















