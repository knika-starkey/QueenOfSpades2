"use strict";
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
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

function show(arr) {
  alert(arr);
}

function play(arr) {
  show(cards);
  shuffle(cards);
  show(cards);
  while (arr.length > 0) {
    alert("Pull the card");
    alert(arr.pop());
    show(cards);
    alert("My turn");
    alert(arr.pop());
    show(cards);
  }
}

play(cards);
