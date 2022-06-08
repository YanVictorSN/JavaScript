let button = document.getElementById("sort");

let result = document.getElementById("result");


button.addEventListener ("click", function(e){
    let randomNumber = Math.random();

    let gender;
    let age;

    
    if (randomNumber <= 0.517) {
        gender = "Mulher";
    } else  {
        gender = "Homem";
    }

    if (randomNumber <= 0.167) {
        age = "Idoso";
    } else  {
        age = "Não Idoso";
    }

    result.innerHTML = `Resultado IBGE: ${gender} ${age}!`;
    
    e.preventDefault()
})