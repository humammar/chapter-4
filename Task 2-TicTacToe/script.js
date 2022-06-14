// const cross = "crossPlayer";
// const circle = "circlePlayer";

// // const boardElement = document.getElementById('.board')
// const boxElements = document.querySelectorAll(".box");
// const resetButton = document.getElementById("reset");

// let isCrossPlayerTurn = false;


// resetButton.onclick = startGame;

// function placeMark(box, currentClass) {
//   box.classList.add(currentClass);
// }

// function handleClick(e) {
//   const boxTarget = e.target;
//   if (turn === cross) {
//       boxTarget.style.backgroundImage = cross;
//       turn = circle;
//   } else {
//       boxTarget.style.backgroundImage = circle;   
//       turn = cross; 
//   placeMark(boxTarget, turn);
// }

// function startGame() {
//   boxElements.forEach((box) => {
//     box.addEventListener("click", handleClick, { once: true });
//   });
// }

// startGame();
















class Configuration {
  static cross = "cross"
  static circle = "circle"
  static wrapper = document.getElementById("wrapper");
  static boxElements = document.querySelectorAll(".box");
  static resetButton = document.getElementById("reset");
  static winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
}

class Game {
  handleClick(e) {

  }
  
  
  
  startGame() {
    Configuration.boxElements.forEach((box) => {
      box.classList.remove(Configuration.cross);
      box.classList.remove(Configuration.circle);
      box.addEventListener("click", this.handleClick, { once: true});
    });    
  }
}

const game = new Game();
game.startGame();