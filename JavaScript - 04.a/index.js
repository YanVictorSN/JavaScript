let calculate = document.getElementById("calculate");
let result = document.getElementById("result")
let explanation = document.getElementById("explanation");

calculate.addEventListener ("click", function(e) {
    let weith = document.getElementById("weith").value.replace(',', '.');
    let height = document.getElementById("height").value.replace(',', '.');
    let imcValue = 0;
    
    if (isNaN(weith) == true) {
        alert("Por favor, insira um peso válido.");
    } else if (isNaN(height) == true) {
        alert("Por favor, insira uma altura válida.");
    } 
    
    if (isNaN(weith) || isNaN(height) == false) {
        let imcValue = weith / (height * height);
        result.innerHTML = `Seu IMC: ${imcValue.toFixed(2)}`;

        if (imcValue.toFixed(2) < 18.5) {
            explanation.innerHTML = `De acordo com o ministério da saúde o seu IMC é: Abaixo do peso`;
        } else if (18.5 < imcValue.toFixed(2) && imcValue.toFixed(2) < 24.9 ) {
            explanation.innerHTML = `De acordo com o ministério da saúde o seu IMC é: Peso normal`;
        } else if (25 < imcValue.toFixed(2) && imcValue.toFixed(2) < 29.9) {
            explanation.innerHTML = `De acordo com o ministério da saúde o seu IMC é: Sobrepeso`;
        } else if (imcValue.toFixed(2) >= 30) {
            explanation.innerHTML = `De acordo com o ministério da saúde o seu IMC é: Obesidade`;
        }     
    }


    e.preventDefault()
})