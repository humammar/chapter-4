// let playerTurn = "player";
// let computerTurn = "computer";
// // let winner = "player";

const gameOption = ["rock", "paper", "scissors"];

// if (winner === "player") {
//     let winResult = document.getElementById("winResult");
//     let win = document.createElement("p");
//     win.innerText = "Player Win";
//     winResult.append(win);
// } else if (winner === "computer") {
//     let winResult = document.getElementById("winResult");
//     let win = document.createElement("p");
//     win.innerText = "Com Win";
//     winResult.append(win);
// } else {
//     let winResult = document.getElementById("winResult");
//     let win = document.createElement("p");
//     win.innerText = "draw";
//     winResult.append(win);
// }

playerTurn = (playerChoose) => {
    console.log("player", playerChoose)
    // alert("player choose " + playerChoose)
    const computerChoose = computerTurn();
    const winner = winnerResult(playerChoose, computerChoose);

    console.log("computerChoose", computerChoose)
    console.log("The Result is", winner);
    // choiceIndicator(playerChoose);
    resultCard(winner);
}

computerTurn = () => {
    let index = generateRandom(3);
    console.log("index", index);
    return gameOption[index];
};

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
        winResult.innerHTML = "<span>Player Win</span>";
        // let win = document.createElement("p");
        // win.innerText = "Player Win";
        // winResult.append(win);
    } else if (result === "lose") {
        let winResult = document.getElementById("card");
        winResult.innerHTML = "<span>Com Win</span>";
        // let win = document.createElement("p");
        // win.innerText = "Com Win";
        // winResult.append(win);
    } else {
        let winResult = document.getElementById("card");
        winResult.innerHTML = "<span>Draw</span>";
        // let win = document.createElement("p");
        // win.innerText = "Draw";
        // winResult.append(win);
    }
}

// // choiceIndicator = (Choice) => {
// //     const rockChosen = document.getElementById("rockId");
// //     const paperChosen = document.getElementById("paperId");
// //     const scissorsChosen = document.getElementById("scissorsId");
// //     if (choice === "rock") {
        
// //         rockChosen.classList.add("chosenIndicator");
// //     } else if (choice == "paper") {
       
// //         paperChosen.classList.add("chosenIndicator");
// //     } else {
        
// //         scissorsChosen.classList.add("chosenIndicator");
// //     }
// }


// generateRandom();
// generateRandom(500);
