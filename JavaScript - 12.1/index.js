const fatorialNumber = document.getElementById('fatorialNumber');
const calcularFatorial = document.getElementById('calcularFatorial');
const primeNumberCalculator = document.getElementById("prime-number");
const factorialBigInt = document.getElementById ("calcular-fatoria-bigint");
const piCalculator = document.getElementById("pi-number");

piCalculator.addEventListener('click', pi);
factorialBigInt.addEventListener ('click',fatorialBigInt);
primeNumberCalculator.addEventListener ('click', primeNumber);
calcularFatorial.addEventListener ('click', fatorial);


// Function Fatorial
function fatorial() {
    let fatorialValue = Number(fatorialNumber.value);
    let resulte = 1;
    for (let i = 1; i <= fatorialValue; i++) {

        resulte = resulte * i;
    }
    console.log(resulte);
}

//Function Fatorial BigInt

function fatorialBigInt() {
    let fatorialValue = BigInt(fatorialNumber.value);
    let resulteBigInt = 1n;
    for (let i = 1n; i <= fatorialValue; i++) {
        
        resulteBigInt = resulteBigInt * i;
    }
    console.log(resulteBigInt);
}

function eulerNumber() {

}

//Function PrimeNumber

function primeNumber() {
    
    let arrayResult = [];

    for (let i = 0; i <= 100000; i++) {
        let flag = 0;

        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }

        if (i > 1 && flag == 0) {
            arrayResult.push(i)
        }
    }
        console.log(arrayResult);
    }
    
//Function Pi
function pi() {
    let i = 1n;
    let x = 3n * (10n ** 1020n);
    let pi = x;
    while (x > 0) {
            x = x * i / ((i + 1n) * 4n);
            pi += x / (i + 2n);
            i += 2n;
    }
    console.log(pi / (10n ** 20n));
}





