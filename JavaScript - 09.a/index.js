function Sum (numb1,numb2) {
    addition = numb1 ^ numb2;
    carry = numb1 & numb2;
    if (carry == 0) {
        return addition;
    } else {
        return Sum(addition,carry << 1)
    }
}

function Subtracion(numb1,numb2) {
    carry = numb1 & numb2;
    if(carry == 0) {
        return numb1;
    } else {
        return Subtracion(Sum(numb1,(~numb2) + 1))
}
}
 //testa sum dentro da sum
console.log(Sum(30,50))
console.log(Subtracion(80,100))






// let button = document.querySelector("button");
// let result = document.getElementById("result");


// button.addEventListener ("click",Sum)

// function Sum() {
//     let a = document.getElementById("number-one").value;
//     let b = document.getElementById("number-two").value;

//     let sumResultTest = ((a & b) << 1) ^ (a ^ b);

//     if (b == 0) {
//         result.textContent = `${sumResultTest}`
//     }     // result.textContent = `${sumResultTest}`
   
//     Sum();
//     // function Subtracion(x) {
       
//     //     if ( > b) {
//     //     // let sub = sumResultTest()) ^ (~b);
//     //     result.textContent = `${sub}`
//     //     } 

// }



// let sumResultTest = ((numb1 & numb2) << 1) ^ (numb1 ^ numb2);
// if (carry != 0) {
//     let carryTest = (numb1 & numb2) << 1;
//     numb1 = numb1 ^ numb2;
//     carry = carryTest;
//     let sumResult = numb1 ^ carry;
//     result.textContent = `${sumResult}`;
// } else {
//     Sum();
// }
