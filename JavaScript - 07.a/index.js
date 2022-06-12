let imgCar = document.getElementById("img-car");

let name = document.getElementById("name"); 

let manufacturer= document.getElementById("manufacturer"); 

let maxSpeed = document.getElementById("max-speed"); 

let accelerationTime = document.getElementById("acceleration-time"); 

let selected = document.getElementById("selected");


selected.addEventListener('change', function() {

    name.textContent = `Carro: ${selected.selectedIndex}`;
     
    switch (selected.selectedIndex) {
        case 1:
    imgCar.setAttribute ("src", "assets/BMW - M2.png")
    name.textContent = `Carro: BMW M2`;
    manufacturer.textContent = `Fabricante: Bayerische Motoren Werke AG`;
    maxSpeed.textContent = `Velocidade Máxima: 280 km/h`;
    accelerationTime.textContent = `Aceleração (0 a 100km/h): 4.2 segundos`;
    break;
        case 2:
    imgCar.setAttribute ("src", "assets/Ferrari 612 Scaglietti.png");
    name.textContent = `Carro: Ferrari 612`;
    manufacturer.textContent = `Fabricante: Ferrari`;
    maxSpeed.textContent = `Velocidade Máxima: 325 km/h`;
    accelerationTime.textContent = `Aceleração (0 a 100km/h): 3.9 segundos`;       
    break;
        case 3:
    imgCar.setAttribute ("src", "assets/TeslaX.png");
    name.textContent = `Carro: Tesla X `;
    manufacturer.textContent = `Fabricante: Tesla`;
    maxSpeed.textContent = `Velocidade Máxima: 262 km/h`;
    accelerationTime.textContent = `Aceleração (0 a 100km/h): 3.9 segundos`;       

    }

   
      

});



