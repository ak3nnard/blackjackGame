let player = {
	name: "Ashley",
	chips: 200
};
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isPlaying = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
	let randomNumber = Math.floor(Math.random() * 13) + 1
	if (randomNumber > 10) {
		return 10
	} else if (randomNumber === 1) {
		return 11
	} else {
		return randomNumber
	}
}

function startGame() {
	isPlaying = true
	// generate two random numbes
    // re-assign the cards and sum variables so that the game can start
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
	renderGame()
}

function renderGame() {
	sumEl.textContent = "Sum: " + sum
	cardsEl.textContent = "Cards: " 
// function to render out all cards in the game
// textContent += keeps the previous text
for (let i = 0; i < cards.length; i++) {
	cardsEl.textContent += cards[i] + " "
}

if (sum <= 20) {
		message = "Do you want to draw a new card?"
	} else if (sum === 21) {
		message = "Congrats! You've got Blackjack!"
		hasBlackJack = true
	} else {
		message = "You're out of the game!"
		isPlaying = false
	}
	messageEl.textContent = message
}

function newCard() {
	if(isPlaying === true && hasBlackJack === false) {
	let card = getRandomCard();
	sum += card
	cards.push(card)
	renderGame()
	}
}
