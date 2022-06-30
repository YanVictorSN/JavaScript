const elementoline = document.querySelectorAll("[data-positionline]");
const elementocollum = document.querySelectorAll("[data-positioncollum]");
const modal = document.getElementById('modal');
const result = document.getElementById('result');
const reset = document.getElementById('reset');

reset.addEventListener('click', resetGame)
console.log(modal)
let imagemX = document.querySelectorAll('img');
for(const elementoClick of elementoline) {
    elementoClick.addEventListener('click', points, {once:true})
}

let player = 'X';

let matrizGame = [];

matrizGame[0] = ['','',''];
matrizGame[1] = ['','',''];
matrizGame[2] = ['','',''];


function resetGame(player) {
    matrizGame = [];
    console.log('resetou')
    modal.style.display = 'none'
    for ( let i = 0; i < 9; i++) {
        imagemX[i].remove();
    }
    location.reload()
}
function resultWin() {
    result.innerHTML = `${player} venceu!`
}

function points(e) {
    // let imagemX = document.querySelectorAll('img');
    let positionLine = e.target.dataset.positionline
    let positionCollum = e.target.dataset.positioncollum
    
    if (player == 'X') {
        imagemX[positionLine].setAttribute("src","imgs/cruz.png");
        imagemX[positionLine].style.display = "block";
        createArray(e,player,positionLine,positionCollum)
        player = 'O';
        
    } else {
        imagemX[positionLine].setAttribute("src","imgs/circle.png");
        imagemX[positionLine].style.display = "block";
        createArray(e,player,positionLine,positionCollum) 
        player = 'X';
    }
}

function createArray(e,player,positionLine,positionCollum) {
    if(positionLine == 0 && positionCollum == 0 ){
        matrizGame[0][0] = player
    } else if (positionLine == 1 && positionCollum == 1){
        matrizGame[0][1] = player
    }  else if (positionLine == 2 && positionCollum == 2){
        matrizGame[0][2] = player
    }  else if (positionLine == 3 && positionCollum == 3){
        matrizGame[1][0] = player
    } else if (positionLine == 4 && positionCollum == 4){
        matrizGame[1][1] = player
    } else if (positionLine == 5 && positionCollum == 5){
        matrizGame[1][2] = player
    } else if (positionLine == 6 && positionCollum == 6){
        matrizGame[2][0] = player
    } else if (positionLine == 7 && positionCollum == 7){
        matrizGame[2][1] = player
    } else if (positionLine == 8 && positionCollum == 8){
        matrizGame[2][2] = player
    }
    winX(matrizGame, player);
    winO(matrizGame, player) 
}


function winX(matrizGame, player) {
    console.log(player);
    
    // matrizGame[0] = [0,1,2];
    // matrizGame[1] = [3,4,5];
    // matrizGame[2] = [6,7,8];
    //Horizontal
    if (matrizGame[0][0] == 'X' && matrizGame[0][1] == 'X' && matrizGame[0][2] == 'X'){
       
        modal.style.transition = '2s ease-in-out';
        modal.style.display = 'flex';
        resultWin()
    } else if (matrizGame[1][0] == 'X' && matrizGame[1][1] == 'X' && matrizGame[1][2] == 'X'){
       
        modal.style.display = 'flex';
        resultWin()
    } else if (matrizGame[2][0] == 'X' && matrizGame[2][1] == 'X' && matrizGame[2][2] == 'X'){
     
        modal.style.display = 'flex';
        resultWin()
        return;
    //Vertical
    } else if (matrizGame[0][0] == 'X' && matrizGame[1][0] == 'X' && matrizGame[2][0] == 'X'){
        
        modal.style.display = 'flex';
        resultWin()
        return;
    }else if (matrizGame[0][1] == 'X' && matrizGame[1][1] == 'X' && matrizGame[2][1] == 'X'){
        player = 'X venceu'
        modal.style.display = 'flex';
        resultWin()
        return;
    }else if (matrizGame[0][2] == 'X' && matrizGame[1][2] == 'X' && matrizGame[2][2] == 'X'){
        
        modal.style.display = 'flex';
        resultWin()
        return;
    //Diagonal
    }else if (matrizGame[0][0] == 'X' && matrizGame[1][1] == 'X' && matrizGame[2][2] == 'X'){
        
        modal.style.display = 'flex';
        resultWin()
        
    }else if (matrizGame[0][2] == 'X' && matrizGame[1][1] == 'X' && matrizGame[1][1] == 'X'){
     
        modal.style.display = 'flex';
        resultWin()
       
    } else if(matrizGame[0][0] && matrizGame[0][1] && matrizGame[0][2] && matrizGame[1][0] && matrizGame[1][1] && matrizGame[1][2] && matrizGame[2][0] && matrizGame[2][1] && matrizGame[2][2] && matrizGame[0][0] && matrizGame[1][1] && matrizGame[2][2] && matrizGame[0][2] && matrizGame[1][1] && matrizGame[2][0] !== '') {
        
            console.log('oi')
            modal.style.display = 'flex';
            result.innerHTML = `Deu velha`
        }
    
    
}

function winO(matrizGame, player) {
    // matrizGame[0] = [0,1,2];
    // matrizGame[1] = [3,4,5];
    // matrizGame[2] = [6,7,8];
    console.log(matrizGame);
    if (matrizGame[0][0] == 'O' && matrizGame[0][1] == 'O' && matrizGame[0][2] == 'O'){
      
        modal.style.display = 'flex';
        resultWin();
    } else if (matrizGame[1][0] == 'O' && matrizGame[1][1] == 'O' && matrizGame[1][2] == 'O'){
        
        modal.style.display = 'flex';
        resultWin()
    } else if (matrizGame[2][0] == 'O' && matrizGame[2][1] == 'O' && matrizGame[2][2] == 'O'){
      
        modal.style.display = 'flex';
        resultWin()
    //Vertical
    } else if (matrizGame[0][0] == 'O' && matrizGame[1][0] == 'O' && matrizGame[2][0] == 'O'){
        
        modal.style.display = 'flex';
        resultWin()
    }else if (matrizGame[0][1] == 'O' && matrizGame[1][1] == 'O' && matrizGame[2][1] == 'O'){
       
        modal.style.display = 'flex';
        resultWin()
    }else if (matrizGame[0][2] == 'O' && matrizGame[1][2] == 'O' && matrizGame[2][2] == 'O'){
        
        modal.style.display = 'flex';
        resultWin()
    //Diagonal
    }else if (matrizGame[0][0] == 'O' && matrizGame[1][1] == 'O' && matrizGame[2][2] == 'O'){
       
        modal.style.display = 'flex';
        resultWin()
    }else if (matrizGame[0][2] == 'O' && matrizGame[1][1] == 'O' && matrizGame[2][0] == 'O'){
       
        modal.style.display = 'flex';
        resultWin();
    } else if (matrizGame[0][0] && matrizGame[0][1] && matrizGame[0][2] && matrizGame[1][0] && matrizGame[1][1] && matrizGame[1][2] && matrizGame[2][0] && matrizGame[2][1] && matrizGame[2][2] && matrizGame[0][0] && matrizGame[1][1] && matrizGame[2][2] && matrizGame[0][2] && matrizGame[1][1] && matrizGame[2][0] !== '') {
            player = 'Deu Velha'
            modal.style.display = 'flex';
            result.innerHTML = `Deu velha`
        }
    
}