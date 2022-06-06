let compare = document.getElementById("compare-string")
let result = document.querySelector("h2")

compare.addEventListener ("click",function (e) {
    let stringOne = document.getElementById("first-string").value;
    let stringTwo = document.getElementById ("second-string").value;

    if (stringOne.length > stringTwo.length) {
        result.textContent = "A primeira frase é maior que a segunda."

    } else if (stringOne.length < stringTwo.length) {
        result.textContent = "A primeira frase é menor que a segunda."

    } else {
        result.textContent = "Iguais!"
    }
    e.preventDefault()
})