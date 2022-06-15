const buttonSubmit = document.querySelector("button");
const result = document.getElementById("result");

buttonSubmit.addEventListener ("click", validateFormat) 

function validateFormat() {
    const convert = document.getElementById("convert");
    
    console.log(typeof(qualquer))
    try {   
    const validateJson = JSON.parse(convert.value); 
    if (validateJson === true) ;
        alert("Parsable JSON string!")
        console.log(validateJson)
    } catch (err)  {
        alert (err)
        result.textContent = (err);
    } 
}