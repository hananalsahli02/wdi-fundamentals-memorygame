console.log("Up and running!");

//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardcardThree);
alert('Hello, friends.');
//const cards = ["queen", "queen", "king","king"];
const cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
  rank: 'queen',
  suit: 'diamonds',
  cardImage: "images/queen-of-diamonds.png"
},
{
rank: 'king',
suit: 'hearts',
cardImage: "images/queen-of-hearts.png"
},
{
rank: 'king',
suit: 'diamonds',
cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];
var flipCard = function(cardId) {
  console.log("User  flipped " +cards[cardId].rank);
cardsInPlay.push(cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}
flipCard(0);
flipCard(2);

var checkFormatch = function() {
  if (cardsInPlay[0] ===cardsInPlay[1]) {
  alert("You found a match!");
} else {
  alert("Sorry, try again.");
}
}
if (cardsInPlay.length ===2)
{
  checkFormatch();
}
