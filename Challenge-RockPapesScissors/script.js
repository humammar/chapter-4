let playerTurn = "player";
let computerTurn = "computer";
let winner = "player";

const gameOption = ["batu", "kertas", "gunting"];

if (winner === "player") {
    let winResult = document.getElementById("winResult");
    let win = document.createElement("p");
    win.innerText = "Player Win";
    winResult.append(win);
} else if (winner === "computer") {
    let winResult = document.getElementById("winResult");
    let win = document.createElement("p");
    win.innerText = "Com Win";
    winResult.append(win);
} else {
    let winResult = document.getElementById("winResult");
    let win = document.createElement("p");
    win.innerText = "draw";
    winResult.append(win);
}

playerTurn = (playerChoose) => {
    console.log("player", playerChoose)
    // alert("player choose " + playerChoose)
    const computerChoose = computerTurn();
    console.log("Computer", computerChoose)
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

// generateRandom();
// generateRandom(500);
