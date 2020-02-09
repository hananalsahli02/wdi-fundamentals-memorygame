console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardcardThree);
alert('Hello, friends.');
const cards = ["queen", "queen", "king","king"];
const cardsInPlay = [];
var cardOne ;
var cardtow ;
cardOne = cards [0];
cardsInPlay.push (cardOne);
console.log("user flipped queen "+ cardOne);

cardtow = cards [2];
cardsInPlay.push (cardtow);
console.log("User flipped king"+ cardtow);
if (cardsInPlay.length ===2){
  if (cardsInPlay [0]=== cardsInPlay[1]){
    alert("You found a match!");
  }
  else {
    alert("Sorry, try again.");
  }
}
