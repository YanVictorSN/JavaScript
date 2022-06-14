let cep = document.getElementById("cep");


cep.addEventListener ("input", function(event) {

    cepValidation = event.target.value;
    
    if (isNaN(event.data)) {
        const deletedNumber =  cepValidation.substring(0, cepValidation.length - 1);
        cep.value = deletedNumber;
    }
})

cep.addEventListener ("keyup", function(event) {
    const maxLeght = cepValidation.length;

    if (maxLeght == 6) {
        cep.value = cep.value + "-"
    }

})

cep.addEventListener ("keydown", function(event) {
        cepBackspace = event.target.value;
        
        console.log(cepBackspace)
    if (event.key === "Backspace" &&  cepBackspace.length == 7 ) {
        cep.value = cepBackspace.slice(0,6);
    }

})
















// cep = ([0-9]{6})[-]([0-9]{3});
// console.log(cep)