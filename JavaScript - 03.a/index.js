
let select = document.getElementById("select").selectedIndex;
let selectOptions = document.getElementById("select").options;

let button = document.getElementById("submit");
let result = document.getElementById("result");


button.addEventListener ("click", function (e){
    let numberOne = document.getElementById("numberOne").value;
    let numberTwo = document.getElementById("numberTwo").value;
   
    let calculate = 0;
    
    if (selectOptions.selectedIndex == [0]) {
        
        let calculate = parseInt(numberOne) + parseInt(numberTwo);
            result.innerHTML = `Resultado: ${calculate}`;  

    } else if (selectOptions.selectedIndex == [1]) {
        let calculate = parseInt(numberOne) - parseInt(numberTwo);
            result.innerHTML = `Resultado: ${calculate}`; 

    } else if (selectOptions.selectedIndex == [2]) { 
        let calculate = parseInt(numberOne) / parseInt(numberTwo);
            result.innerHTML = `Resultado: ${calculate}`; 

    } if (selectOptions.selectedIndex == [3]){
        let calculate = parseInt(numberOne) * parseInt(numberTwo);
        result.innerHTML = `Resultado: ${calculate}`; 
    }
    
    e.preventDefault()
}) 

button.addEventListener ("click", function () {
    let mainImg = document.querySelector("img");

    if (selectOptions.selectedIndex == [0]) {    
        mainImg.setAttribute("src","assets/plus.png");

    } else if (selectOptions.selectedIndex == [1]) {
        mainImg.setAttribute("src","assets/minus.png");

    } else if (selectOptions.selectedIndex == [2]) { 
        mainImg.setAttribute("src","assets/slash.png");

    } if (selectOptions.selectedIndex == [3]){
        mainImg.setAttribute("src","assets/asterisks.png");
    
}
})
