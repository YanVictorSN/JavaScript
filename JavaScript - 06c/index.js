
let button = document.getElementById("alarm");

let mensage = document.getElementById("time-left");

let alarmSound = new Audio ("assets/198841__bone666138__analog-alarm-clock.wav")


button.addEventListener ("click", count);

function count() {
    minutesTime = setInterval(countMinutes, 1000);
    secondsTime = setInterval(countSeconds, 1000);
    minutes = document.getElementById("minutes").selectedIndex;
    seconds = document.getElementById("seconds").selectedIndex;
    button.addEventListener ("click", desarmAlarm);
    button.textContent = "Desativar Alarme";
    button.removeEventListener ("click", count);
    console.log(seconds)
}

function desarmAlarm() {
    clearInterval(minutes);
    clearInterval(seconds);
    mensage.textContent = `Tempo restante: ${minutes}:${seconds} `;
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