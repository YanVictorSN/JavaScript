let result = document.querySelector("h2")
let buttonCompare = document.getElementById("compare")

buttonCompare.addEventListener ("click", function (e) {
    let numberOne = document.getElementById("first-number").value;
    let numberTwo = document.getElementById("second-number").value;
    if (Number(numberOne) > Number(numberTwo)) {
        result.textContent ="Primeiro número é maior que o segundo."

    } else if (Number(numberOne) < Number(numberTwo)) {
        result.textContent ="Primeiro número é menor que o segundo." 
        
    } else if (Number(numberOne) == Number(numberTwo)) {
        result.textContent ="Os números são iguais!"
    }
    e.preventDefault()
})