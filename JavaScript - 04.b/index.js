let button = document.getElementById("sort");

let result = document.getElementById("result");

let random = 0;

button.addEventListener ("click", function (e) {
    let numberOne = parseInt(document.getElementById("number-one").value);
    let numberTwo = parseInt(document.getElementById("number-two").value);

    if (isNaN(numberOne) == true) {
        alert("Por favor, insira um número válido.");
    } else if (isNaN(numberTwo) == true) {
        alert("Por favor, insira uma número válido.");
    } 
    
    if (Number.isInteger(numberOne,numberTwo) === true) {
        function getRandomArbitrary (min, max) {
            return Math.random() * (max - min) + min;      
        }
    }
    
    if (numberTwo < numberOne ) {
        alert("Por favor, insira um valor mínimo maior que o valor máximo.");
    }
    
    let randomONe = getRandomArbitrary (numberOne,numberTwo);
        result.innerHTML = `Valor sorteado: ${randomONe.toFixed(2)}`
  
    e.preventDefault()
})