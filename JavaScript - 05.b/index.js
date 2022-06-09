let button = document.getElementById("button");
let day = document.getElementById("day");
let month = document.getElementById("month");
let year = document.getElementById("year");
let weekDay = document.getElementById("week-day");
let monthName = document.getElementById("month-pt-br");
let valueTime = document.getElementById("value-miliseconds");


button.addEventListener ("click", function(e) {
    let date = document.getElementById("date").value; 
    let birthDate = new Date(date);
 
    let birthDay = Number(birthDate.getDate() + 1);
    let birthMonth = Number(birthDate.getMonth() + 1);
    let birthYear = Number(birthDate.getFullYear());
    let birthDayWeek = Number(birthDate.getDay());

    let birthDayTime = birthDate.getTime();
    console.log(birthDayTime)
   

    day.textContent = `Dia: ${birthDay}`;
    month.textContent = `Mês: ${birthMonth}`;
    year.textContent = `Ano: ${birthYear}`;
    valueTime.textContent =`Valor da Data: ${birthDayTime}`;
    
    switch (birthDayWeek) {
        case 0:
            weekDay.textContent = `Dia da Semana: Segunda`;
            break;
        case 1:
            weekDay.textContent = `Dia da Semana: Terça`;
            break;
        case 2:
            weekDay.textContent = `Dia da Semana: Quarta`;
            break;
        case 3:
            weekDay.textContent = `Dia da Semana: Quinta`;
            break;
        case 4:
            weekDay.textContent = `Dia da Semana: Sexta`;
            break;
        case 5:
            weekDay.textContent = `Dia da Semana: Sábado`;
            break;
        case 6:
            weekDay.textContent = `Dia da Semana: Domingo`;
            break;
    }
    switch (birthMonth) {
        case 1:
            monthName.textContent = `Mês em Português: Janeiro`;
            break;
        case 2:
            monthName.textContent = `Mês em Português: Fevereiro`;
            break;
        case 3:
            monthName.textContent = `Mês em Português: Março`;
            break;
        case 4:
            monthName.textContent = `Mês em Português: Abril`;
            break;
        case 5:
            monthName.textContent = `Mês em Português: Maio`;
            break;
        case 6:
            monthName.textContent = `Mês em Português: Junho`;
            break;
        case 7:
            monthName.textContent = `Mês em Português: Julho`;
            break;
        case 8:
            monthName.textContent = `Mês em Português: Agosto`;
            break;
        case 9:
            monthName.textContent = `Mês em Português: Setembro`;
            break;
        case 10:
            monthName.textContent = `Mês em Português: Outubro`;
            break;
        case 11:
            monthName.textContent = `Mês em Português: Novembro`;
            break;
        case 12:
            monthName.textContent = `Mês em Português: Dezembro`;
            break;
    }
    // .padStart()
    e.preventDefault()
})