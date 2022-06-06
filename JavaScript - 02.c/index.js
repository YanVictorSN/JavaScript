let calculate = document.getElementById("bnt-calculate");
let result = document.querySelector("h4")

calculate.addEventListener ("click",function (e) {
    let birth = document.getElementById("birth-date").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    let currentDate = new Date();
    let currentDay = Number(currentDate.getDate());
    let currentMonth = Number(currentDate.getMonth() + 1);
    let currentYear = Number(currentDate.getFullYear());

    let birthDate = new Date(birth);
    let birthDay = Number(birthDate.getDate() + 1);
    let birthMoth = Number(birthDate.getMonth() + 1);
    let birthYear = Number(birthDate.getFullYear());

    let ageYear = currentYear - birthYear;
    let ageMonth = birthMoth - currentMonth;
    let ageDay = birthDay - currentDay ;

    
    if (ageMonth < 0) {
        ageYear--;
    } else if (ageMonth == 0 || ageDay <= 0 ) {
        ageYear--;
        console.log(ageDay,ageMonth,ageYear);
    }
    
    
    let daysleftfordeath = 0;

    if (gender === "masculino") {
            daysleftfordeath = Math.floor((71.1 - ageYear)* 365);
        result.innerHTML = `Faltam ${daysleftfordeath} dias para sua morte`;

    } else if (gender === "feminino") {
            daysleftfordeath = Math.floor((80.1 - ageYear)* 365);
        result.innerHTML = `Faltam ${daysleftfordeath} dias para sua morte`;
    }

      
    




    e.preventDefault()
})
