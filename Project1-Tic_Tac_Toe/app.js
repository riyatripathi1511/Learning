let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //playerX, playerO

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 4, 6],
  [2, 5, 8],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click",() => {
    console.log("box was clicked");
    if(turnO){ //player O turn
      box.innerText = "O"
      turnO = false;
    }else{ // player X turn 
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();

  });
});
const checkWinner = () => {
  for(pattern of winPatterns){
    console.log(pattern);
    
  }
}
