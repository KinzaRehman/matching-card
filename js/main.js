// alert('works')
/* i need it to display 10 cards at a time
10/2 , 5 pairs 
use 52 cards, number and emoji and random cards 
//https://www.piliapp.com/emoji/list/playing-cards/
the player presses the play button for game to staart 
the inital score is zero
when play clicks on two cards then validate if theyre a match
if not they cards flip back over
if it matches the card stay flipped
game ends when they players matches all card? or a time limit of 60 seconds to match
or moves? 
10 cards, 6 moves? 
if matcched in lesss than 6 moves they win, if not they lose? 

first jsut cards and matches


*/ 

const card = [ "♠️", "♥️", "♦️", "♣️", "🂡", "🂢", "🂣", "🂤", "🂥", "🂦", "🂧", "🂨", "🂩", "🂪", "🂫", "🂭", "🂮"]
const RandomizeCard = card.sort(() => 0.5 - Math.random()).slice(0,5);

console.log(RandomizeCard); 


const duplicateCards = [...RandomizeCard, ...RandomizeCard].sort(() => 0.5 -Math.random());
console.log(duplicateCards);

let firstCard = null;
let lockboard = false;
let matchedCards = 0;
let score = 0;

function revealCard(card) {

    if (
        lockboard ||
        card.classList.contains("matched") ||
        card === firstCard
    ) {
        return;
    }

    card.textContent = card.dataset.card;
    card.classList.add("reveal");

    if (!firstCard) {
        firstCard = card;
        return;
    }

}