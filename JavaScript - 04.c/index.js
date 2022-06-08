let maxNumber = document.getElementById("ceil-number");

let minNumber = document.getElementById("floor-number");
let round = document.getElementById("round");


round.addEventListener ("click", function(e) {
    let notInt = parseFloat(document.getElementById("number-not-int").value);

    let floorNumber = Math.floor(notInt);
    let ceilNumber = Math.ceil(notInt);


    if (isNaN(notInt) === true || Number.isInteger(notInt) === true) {
        alert("Por favor, insira um número não inteiro válido.");
    } else {
        maxNumber.innerHTML = `Maior número inteiro: ${floorNumber}`;
        minNumber.innerHTML = `Menor número inteiro: ${ceilNumber}`;
    }


    e.preventDefault()
})