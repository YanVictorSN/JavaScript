
let button = document.getElementById("alarm");

let mensage = document.getElementById("time-left");

let alarmSound = new Audio ("assets/198841__bone666138__analog-alarm-clock.wav")

let minutesTime = 0;
let secondsTime = 0;

button.addEventListener ("click", count);

function count() {
    minutesTime = setInterval(countMinutes, 1000);
    secondsTime = setInterval(countSeconds, 1000);
    minutes = document.getElementById("minutes").selectedIndex;
    seconds = document.getElementById("seconds").selectedIndex;
    button.addEventListener ("click", desarmAlarm);
    button.textContent = "Desativar Alarme";
    console.log(seconds)
}


function countMinutes() {
    mensage.textContent = `Tempo restante: ${minutes}:${seconds} `
    if (minutes > 0) {
        --minutes;
    } else if (minutes == 0 && seconds== 0) {
        alarmSound.play();
    }
}
function countSeconds() {
    mensage.textContent = `Tempo restante: ${minutes}:${seconds} `
    if (seconds > 0) {
        --seconds;
    } else if (minutes > 0 && seconds == 0) {
        seconds= 59;
    } else if (minutes == 0 && seconds == 0) {
       clearInterval(minutes);
       clearInterval(seconds);
    }
}
function desarmAlarm() {
    button.removeEventListener ("click", count);
    mensage.textContent = `Tempo restante: ${minutes}:${seconds} `;
    clearInterval(minutes);
    clearInterval(seconds);
}
