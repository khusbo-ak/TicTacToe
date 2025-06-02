let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector(".reset");
let newGameButton = document.querySelector(".newGameButton");
let msgContainer= document.querySelector(".msgContainer");
let msg= document.querySelector(".msg");



let turnX = true; // X starts first

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const resetGame = () => {
    turnX = true; // Reset turn to X
    enableBoxes();
    msgContainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("Box clicked:", box);

    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
}
  const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = ""; // Clear the text
  });

}
const showWinner = (winner) => {
    msg.innerText = `Congratulation! Winner is ${winner} !`;
    msgContainer.classList.remove("hide");
    disableBoxes();
    };

const checkWinner = () => {
    for (let pattern of winPatterns) {
        //  console.log(pattern[0], pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
    let position1 = boxes[pattern[0]].innerText;
    let position2 = boxes[pattern[1]].innerText;    
    let position3 = boxes[pattern[2]].innerText;
        if (position1 !="" && position2 != "" && position3 !== "") {
            if (position1 === position2 && position2 === position3) {
                console.log("Winner :", position1);
                showWinner(position1);
                
            }
        }
            
    }
    };

    newGameButton.addEventListener("click", resetGame);

resetButton.addEventListener("click", resetGame);
