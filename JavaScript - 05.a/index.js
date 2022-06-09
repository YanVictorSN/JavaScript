
let button = document.querySelector("button");
let result = document.getElementById("result");

button.addEventListener ("click", function(e) {
    let number = parseInt(document.getElementById("number").value);
    
    switch (number) {
        case 0:
            result.textContent = "Número por extenso: Zero"
            break;
        case 1:
            result.textContent = "Número por extenso: One"
            break;
        case 2:
            result.textContent = "Número por extenso: Two"
            break;
        case 3:
            result.textContent = "Número por extenso: Three"
            break; 
        case 4:
            result.textContent = "Número por extenso: Four"
            break;
        case 5:
            result.textContent = "Número por extenso: Five"
            break;
        case 6:
            result.textContent = "Número por extenso: Six"
            break;
        case 7:
            result.textContent = "Número por extenso: Seven"
            break; 
        case 8:
            result.textContent = "Número por extenso: Eight"
        break;
        case 9:
            result.textContent = "Número por extenso: Nine"
            break; 
        case 10:
            result.textContent = "Número por extenso: Ten"
            break;
        default:
            alert("Insira um número inteiro válido entre 0 e 10");
} 

    e.preventDefault()
})