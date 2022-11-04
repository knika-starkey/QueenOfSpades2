let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let stack = [];
let mainStack = shuffle(values);
let isRealPl = true;
let moveType = 0;

function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

function move(rplayer, type) {
  function showMove() {
    if (rplayer) alert("You took " + card);
    else alert("I took " + card);
  }
  let card = "";
  let moveNPlayer = 0;
  switch (type) {
    case 0:
      card = mainStack.shift();
      break;
    case 1:
      card = mainStack.pop();
      break;
    case 2:
      if (rplayer) {
        moveNPlayer = +prompt("Choos which card");
        if (moveNPlayer >= mainStack.length || moveNPlayer < 0) {
          alert("This card not exist");
          moveNPlayer = Math.round(mainStack.length / 2);
        }
      } else {
        moveNPlayer = Math.floor(Math.random() * mainStack.length);
      }
      card = mainStack.pop(moveNPlayer, 1);
      break;
    default:
      alert("Error");
      break;
  }
  stack.splice(stack.length, 0, card);
  showMove();
  return;
}

function checkWin() {
  if (stack[stack.length - 1] == "Q") {
    return true;
  } else return false;
}
function game() {
  while (!checkWin()) {
    isRealPl = true;
    move(isRealPl, moveType);
    if (checkWin()) {
      alert("YOU WIN!!! GOOD JOB :)");
      return;
    }
    isRealPl = false;
    move(isRealPl, moveType);
    if (checkWin()) {
      alert("I WIN!!! HA-HA >:)");
      return;
    }
    console.log(moveType);
    moveType++;
    moveType = moveType === 3 ? 0 : moveType;
  }
}
game();
