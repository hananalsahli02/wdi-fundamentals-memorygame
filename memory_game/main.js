console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardcardThree);
alert('Hello, friends.');
const cards = ["queen", "queen", "king","king"];
const cardsInPlay = [];
var flipCard = function(cardId) {
  console.log("User  flipped" +cards[cardId]);
cardsInPlay.push(cards[cardId]);
}
flipCard(0);
flipCard(2);

var checkFormatch = function() {
  if (cardsInPlay[0] ===cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
if (cardsInPlay.length ===2)
{
  checkFormatch();
}
