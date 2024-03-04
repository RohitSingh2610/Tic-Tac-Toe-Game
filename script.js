let box = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".massage-container");
let paga1 = document.querySelector("#massage");

let turn0 = true;
let winningPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
//not found winner
const checkTie = () => {
  let allBoxesClicked = true;
  for (let boxItem of box) {
    if (boxItem.innerText === "") {
      allBoxesClicked = false;
      break;
    }
  }
  if (allBoxesClicked) {
    paga1.innerText = "It's a tie! No winner.";
    msgContainer.classList.remove("hide");
    paga1.style.color = "red";
    
    disableBoxes();
  }
};
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};
box.forEach((boxAll) => {
  boxAll.addEventListener("click", () => {
    // console.log("click");
    if (turn0) {
      //player 1
      boxAll.innerText = "O";
      turn0 = false;
    } else {
      //player2
      boxAll.innerText = "X";
      boxAll.style.color = "green";
      turn0 = true;
    }
    boxAll.disabled = true;
    checkWinner();
  });
});

const disableBoxes = () => {
  for (let boxs of box) {
    boxs.disabled = true;
  }
};
const enableBoxes = () => {
  for (let boxs of box) {
    boxs.disabled = false;
    boxs.innerText = "";
  }
};

const showWinner = (winner) => {
  paga1.innerText = `Congratulations , Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};
const checkWinner = () => {
  for (let pattern of winningPattern) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(
    //   box[pattern[0]].innerText,
    //   box[pattern[1]].innerText,
    //   box[pattern[2]].innerText
    // );
    let posVal1 = box[pattern[0]].innerText;
    let posVal2 = box[pattern[1]].innerText;
    let posVal3 = box[pattern[2]].innerText;
    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        // console.log("Winner", posVal1);
        showWinner(posVal1);
      }
    }
  }
  checkTie();
};

newGameBtn.addEventListener("click", resetGame);
resetButton.addEventListener("click", resetGame);
