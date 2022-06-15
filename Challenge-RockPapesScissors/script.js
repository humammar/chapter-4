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
        winResult.innerHTML = `<span class="cardShape">Player Win</span>`;        
    } else if (result === "lose") {
        let winResult = document.getElementById("card");
        winResult.innerHTML = `<span class="cardShape">Com Win</span>`;
    } else {
        let winResult = document.getElementById("card");
        winResult.innerHTML = `<span class="cardShape">Draw</span>`;
    }
}

refreshButton = () => {
    // console.log("alert game refresh")
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

    let refreshResultCard = document.getElementsByClassName
    ("cardShape");
    if (refreshResultCard.length > 0) {
        refreshResultCard[0].classList.remove("cardShape");
    }

    let refreshResultCard = document.getElementsByClassName
    ("vs");
    if (refreshResultCard.length > 0) {
        refreshResultCard[0].classList.remove("vs");
    }
}

playerIndicatorBackground = (choice) => {
    let rockChosenByPlayer = document.getElementById("playerRock");
    let paperChosenByPlayer = document.getElementById("playerPaper");
    let scissorsChosenByPlayer = document.getElementById("playerScissors");

    let chosenAlready = 
        document.getElementsByClassName("chosenIndicator"); 

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

    let chosenAlready = 
        document.getElementsByClassName("chosenIndicator-2"); 

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


