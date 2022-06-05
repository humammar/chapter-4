const cross = "crossPlayer";
const circle = "circlePlayer";

// const boardElement = document.getElementById('.board')
const boxElements = document.querySelectorAll(".box");
const resetButton = document.getElementById("reset");

let isCrossPlayerTurn = false;


resetButton.onclick = startGame;

function placeMark(box, currentClass) {
  box.classList.add(currentClass);
}

function handleClick(e) {
  const boxTarget = e.target;
  if (turn === cross) {
      boxTarget.style.backgroundImage = cross;
      turn = circle;
  } else {
      boxTarget.style.backgroundImage = circle;   
      turn = cross; 
  placeMark(boxTarget, turn);
}

function startGame() {
  boxElements.forEach((box) => {
    box.addEventListener("click", handleClick, { once: true });
  });
}

startGame();



// start();
// restart.addEventListener('click', restartGame);

// function start() {
//   isCrossPlayerTurn = true;
//   box.forEach(box => {
//     const removeCrossPlayer = box.classList.remove(cross, disabled);
//     const removeCirclePlayer = box.classList.remove(circle, disabled);
//     box.addEventListener('click', handleClick, {once: true})
//   })
// }

// function restartGame() {
//   start();
// }

// function handleClick(e) {
//   const boxTarget = e.target;
//   const currentClass = isCrossPlayerTurn ? cross : circle;
//   placeMark(boxTarget, currentClass);
//   swapTurn();
// }

// function placeMark(box, currentClass) {
//   box.classList.add(currentClass, disabled);
// }

// function swapTurn() {
//   isCrossPlayerTurn = !isCrossPlayerTurn;
// }













// //     boxElements.forEach((box) => {
// //         box.addEventListener("click", handleClick);
// //     });
// // }


//     // if (turn === cross) {
//     //     boxTarget.style.backgroundImage = cross;
//     //     turn = circle;
//     // } else {
//     //     boxTarget.style.backgroundImage = circle;   
//     //     turn = cross; 
//     // }