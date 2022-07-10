const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;
function flipCard(){
    if (lockBoard) return;
    if(this===firstCard) return;
    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard=true;
        firstCard= this;
    } else{
        secondCard = this;
        hasFlippedCard = false;
        checkForMatch();
    }

}

function checkForMatch(){
    if(firstCard.dataset.card === secondCard.dataset.card){
        disableCards();
    } else {
        unflipCards();
    }
}

function disableCards(){
    lockBoard = true;
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards(){
    lockBoard = true;
    setTimeout(() =>{
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');  
        resetBoard();
    }, 1500);
}

function resetBoard(){
    [lockBoard, hasFlippedCard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random() * 12);
        card.style.order = randomPosition;
    });
})();   

cards.forEach((card) => {
    card.addEventListener('click', flipCard);
});