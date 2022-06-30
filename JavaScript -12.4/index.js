let firstCard = document.getElementById('first-card');
let secondCard = document.getElementById('second-card');
let trirthCard = document.getElementById('trirth-card');
let fourthCard = document.getElementById('fourth-card');
let fifthCard = document.getElementById('fifth-card');
let displaySection = document.querySelector('section');

const buttonShuffle = document.getElementById('shuffle');


const cards = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];
const typeCards = ['H','C','D','S'];

const cardShuffle = [];

let valueCards = [];

//Cria deck de cartas;

const allCards = [];

typeCards.forEach((item)=> {
    cards.forEach((card,index)=>{
        allCards.push({card:card,type:item,value:index + 1});  
    })
});
const result = document.getElementById('result');

//Função para contar os pares

function quadra() {
    let count = 0;
    for(x = 0; x < 5; x++){
        for(z = x + 1; z < 5; z++) {
            if (valueCards[x].value == valueCards[z].value) {
                count++
            }
        }
    }
    if(count == 1) {
        result.innerHTML = `Um Par!`
    } else if (count == 2) {
        result.innerHTML = `Dois Pares!`
    } else if (count == 4) {
        result.innerHTML = `Quadra!`
    }
}


function trinca() {
    let contaTrinca = 0;
    for(x = 0; x < 5; x++){
        for(z = x + 1; z < 5; z++) {
            for(w = z + 1; w < 5; w++) {
                if (valueCards[x].value == valueCards[z].value && valueCards[z].value == valueCards[w].value) {
                    contaTrinca++
                }
            }
        }
    }
    if(contaTrinca == 1) {
        result.innerHTML = `Trinca!`
    }
}

function straightFlush() {
    let count = 0;
    valueCards.sort(function(a, b){return a.value-b.value});
    for(x = 0; x < 5; x++){
        for(z = x + 1; z < 5; z++) {
            if (valueCards[x].value - valueCards[z].value == -1 && valueCards[x].type == valueCards[z].type) {  
               count++;
            }
        }
    }
    if (count == 5) {
        result.innerHTML = `Straight Flush!`
    }
}

function fullhouse() {
    let countfull = 0;
    let count = 0;
    for(x = 0; x < 5; x++){
        for(z = x + 1; z < 5; z++) {
            for(w = z + 1; w < 5; w++) {
                if (valueCards[x].value == valueCards[z].value && valueCards[z].value == valueCards[w].value) {
                    countfull++
                }
            }
        }
    }
    for(x = 0; x < 5; x++){
        for(z = x + 1; z < 5; z++) {
            if (valueCards[x].value == valueCards[z].value) {
                count++
            }
        }
    }
    if (countfull + count == 2) {
        result.innerHTML = `Full House!`
    
}
}

function sequencia() {
    let countSequência = 0;
    valueCards.sort(function(a, b){return a.value-b.value});
    for(x = 0; x < 5; x++){
        for(z = x + 1; z < 5; z++) {
            if (valueCards[x].value - valueCards[z].value == -1) {  
                countSequência++;
            }
        }
    }
    if (countSequência == 5) {
        result.innerHTML = `Sequência!`
    }
}

buttonShuffle.addEventListener ('click', shuffleCards);

//Embaralha jogo de cartas:

function shuffleCards() {

    displaySection.style.display = 'Block'
    result.innerHTML = '';
    valueCards = [];
    const allCardsCopy = [...allCards]

    for (y = 0; y < allCardsCopy.length; y++) {
        let shuffleCard = allCardsCopy[y];
        let random = Math.floor(Math.random() * allCardsCopy.length);
        allCardsCopy[y] = allCardsCopy[random];
        allCardsCopy[random] = shuffleCard;
    }

    let firstCardSlice = allCardsCopy.splice(0,1);
    let secondCardSlice = allCardsCopy.splice(1,1);
    let trirthCardSlice = allCardsCopy.splice(2,1);
    let fourthCardSlice = allCardsCopy.splice(3,1);
    let fifthCardSlice = allCardsCopy.splice(4,1);
    

    firstCard.setAttribute("src", `imgs/${firstCardSlice[0].card}${firstCardSlice[0].type}.svg`);
    secondCard.setAttribute("src", `imgs/${secondCardSlice[0].card}${secondCardSlice[0].type}.svg`);
    trirthCard.setAttribute("src", `imgs/${trirthCardSlice[0].card}${trirthCardSlice[0].type}.svg`);
    fourthCard.setAttribute("src", `imgs/${fourthCardSlice[0].card}${fourthCardSlice[0].type}.svg`);
    fifthCard.setAttribute("src", `imgs/${fifthCardSlice[0].card}${fifthCardSlice[0].type}.svg`);

    valueCards.push(firstCardSlice[0],secondCardSlice[0],trirthCardSlice[0],fourthCardSlice[0],fifthCardSlice[0]);

    quadra();
    trinca();
    sequencia();
    fullhouse();
    straightFlush();
}
