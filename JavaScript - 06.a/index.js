let bombImg = document.getElementById("bomb-img");
let buttonBomb = document.getElementById("buttonBomb");
let mensage = document.getElementById("mensage");
let bumSound = new Audio ("assets/156031__iwiploppenisse__explosion.mp3");
let tickSound = new Audio ("assets/422642__trullilulli__sfx-ambiance-clock-tick.wav");
let time = 60;
let timeExplosion = 0;

buttonBomb.addEventListener ("click", activeBomb)

function activeBomb() {
    bombImg.setAttribute("src", "assets/bomb1.png");
    timeExplosion = setInterval(timeDecreasing, 1000);
}

bombImg.addEventListener ("click", deactivateBomb)

function deactivateBomb() {
    clearInterval (timeExplosion)
    bombImg.setAttribute("src", "assets/bomb2.png");
    mensage.textContent =  `Tempo restante:${time}`;
} 

function timeDecreasing() {
    if (--time > 0) {
        mensage.textContent =  `Tempo restante:${time}`;
        tickSound.play()
        tickSound.volume = 0.6;
    } else if (time == 0) {
        bombImg.setAttribute("src", "assets/explosao-nuclear.png");
        bumSound.play();
        bumSound.volume = 0.4;
        console.log("Bum!")
        mensage.textContent = "";
        time = 60;
        clearInterval (timeExplosion)
    }
}


