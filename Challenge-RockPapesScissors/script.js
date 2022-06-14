let playerTurn = "player"
let computerTurn = "computer"
let winner = "player"

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

playerTurn = (playerchoose) => {
    alert

}