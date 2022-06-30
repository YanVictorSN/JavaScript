



// g. Armazenar em um array de 2 (duas) dimensões os elementos clicados, isto é, ‘linha’
// e ‘coluna’ do elemento clicado;
// h. Verificar se o array possui um vencedor e finalizar o jogo:
// i. Se houver vencedor, identificá-lo e exibir a mensagem;
// ii. Se houver empate, mostrar a mensagem;
// iii. Permitir reiniciar o jogo.

const elementoline = document.querySelectorAll("[data-positionline]");
const elementocollum = document.querySelectorAll("[data-positioncollum]");

for(const elementoClick of elementoline) {
    elementoClick.addEventListener('click', points, {once:true})
}

let circle = 0;

let matrizGame = [];

matrizGame[0] = [];
matrizGame[1] = [];
matrizGame[2] = [];



function points(e) {
    console.log('oi')
    let positionLine = e.target.dataset.positionline
    let positionCollum = e.target.dataset.positioncollum
    console.log( positionLine,positionCollum)
    if (circle == 0) {
        imagemX[positionImg].setAttribute("src","imgs/cruz.png");
        imagemX[positionImg].style.display = "block";
        circle = 1;
        // createArray(e,positionImg)
        
    } else {
        imagemX[positionImg].setAttribute("src","imgs/circle.png");
        imagemX[positionImg].style.display = "block"; 
        circle = 0;
        // createArray(e,positionImg)
    }
}

// function createArray(e,positionImg) {
//     console.log(typeof(e.target.dataset.position))
//     console.log(positionImg)
//     console.log(matrizGame[0][0])

//     switch (positionImg) {
//         case '0':
//         // matrizGame[0].push([1]${'Oie'});
//         break;
//     }


    // if(positionImg == 0) {
    //     matrizGame[1].push('Oie');
    // }
    // // switch (positionImg) {
    //     case 0:
    //         matrizGame[0][0].push('Oie');
    //         break
    // }
//     console.log(matrizGame)
// }








// elemento[0].addEventListener ("click",elemento0);
// elemento[1].addEventListener ("click",elemento1);
// elemento[2].addEventListener ("click",elemento2);
// elemento[3].addEventListener ("click",elemento3);
// elemento[4].addEventListener ("click",elemento4);
// elemento[5].addEventListener ("click",elemento5);
// elemento[6].addEventListener ("click",elemento6);
// elemento[7].addEventListener ("click",elemento7);
// elemento[8].addEventListener ("click",elemento8);

// function elemento0() {
//     console.log(elemento[0].dataset.position)
//     elemento[0].
// }
// function elemento1() {
//     console.log(elemento[1].dataset.position)
// }
// function elemento2() {
//     console.log(elemento[2].dataset.position)
// }
// function elemento3() {
//     console.log(elemento[3].dataset.position)
// }
// function elemento4() {
//     console.log(elemento[4].dataset.position)
// }
// function elemento5() {
//     console.log(elemento[5].dataset.position)
// }
// function elemento6() {
//     console.log(elemento[6].dataset.position)
// }
// function elemento7() {
//     console.log(elemento[7].dataset.position)
// }
// function elemento8() {
//     console.log(elemento[8].dataset.position)
// }

// elemento.forEach((item,index)=> {
//     console.log(elemento[index].dataset.position);
//     })
    // console.log(elemento[].dataset.position)
// Se o elemento clicado anterior for data set tal colocar data set outro
// console.log(elemento[0].data)

