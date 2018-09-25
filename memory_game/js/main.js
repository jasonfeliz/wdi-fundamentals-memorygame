//cards object
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
]
//empty array. loads clicked cards into this array
var cardsInPlay = [];

//checks if cards in the array are a match
var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");	
	}
}

//when user clicks on card image, this function is triggered by event listener
var flipCard = function(e){
	var cardId = this.getAttribute("data-id");
	console.log(cardId)
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute("src",cards[cardId].cardImage)
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
	 console.log("User flipped " + cards[cardId].rank + " image path: " + cards[cardId].cardImage + " suit: " + cards[cardId].suit)

}
//displays images when the page loads
var createBoard = function(){

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute("src","images/back.png");
		cardElement.setAttribute("data-id",i);
		cardElement.addEventListener("click",flipCard);//trigger flipCard function when an item is clicked
		document.getElementById("game-board").appendChild(cardElement)
	}
}

createBoard();