let minutes = document.getElementById("minutes").selectedIndex;

let seconds = document.getElementById("seconds").selectedIndex;

let button = document.getElementById("alarm");

let mensage = document.getElementById("time-left");

let minutesTime = 59;

let secondsTime = 59;


button.addEventListener ("click", count);

function count() {
    minutesTime = setInterval(countMinutes,1000);
}

console.log(minutesTime)
function countMinutes() {
    console.log(minutesTime)
    if (--minutesTime > 0) {
        mensage.textContent = `${minutesTime}`;
    } else if (minutesTime == 0) {
        console.log("bip,bip")
    }
}