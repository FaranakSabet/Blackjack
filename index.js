let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardEl = document.querySelector("#card-el");

function startGame(){
    sumEl.textContent = "Sum: " + sum;
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard
    if (sum <= 20){
        message = "do you want to draw a new card?"
    }else if( sum === 21){
        message = "You've got Blackjack!"
        hasBlackjack = true;
    }else {
        message = "You are out of the game!"
        isAlive = false;
    }
 messageEl.textContent = message;
}
