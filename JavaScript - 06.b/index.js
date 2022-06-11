let bombImg = document.getElementById("bomb-img");
let buttonBomb = document.getElementById("buttonBomb");
let mensage = document.getElementById("mensage");
let bumSound = new Audio ("assets/156031__iwiploppenisse__explosion.mp3");
let timeExplosion = 0;

buttonBomb.addEventListener ("click", activeBomb)

function activeBomb() {
    bombImg.setAttribute("src", "assets/bomb1.png");
    mensage.textContent = "Clique na bomba para desarmá-la."; 
    timeExplosion = setTimeout(explosion, 5000);

}

bombImg.addEventListener ("click", deactivateBomb)

function deactivateBomb() {
    clearTimeout(timeExplosion);
    bombImg.setAttribute("src", "assets/bomb2.png");
    mensage.textContent = "Desarmada";  

} 

function explosion() {
    bombImg.setAttribute("src", "assets/explosao-nuclear.png");
    bumSound.play();
    bumSound.volume = 0.4;
    mensage.textContent = "";
}
