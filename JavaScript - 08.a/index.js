const btnSubmitInput  = document.querySelector("button");
const result = document.getElementById("result");
const nameResult = document.getElementById("nameResult");
const dateResult = document.getElementById("dateResult");
const weightResult = document.getElementById("weightResult");
const heightResult = document.getElementById("heightResult");
const genderResult = document.getElementById("genderResult");
const jsonResult = document.getElementById("stringify");
btnSubmitInput.addEventListener ("click", creatObject)

function creatObject() {
    const nameInput = document.getElementById("name");
    const dayInput = document.getElementById("day")
    const monthInput  = document.getElementById("month");
    const yearInput  = document.getElementById("year")
    const weightInput  = document.getElementById("weight");
    const heightInput  = document.getElementById("height");
    const genderInput  = document.getElementById("gender");

    const inputDate = `${yearInput.value}/${monthInput.value}/${dayInput.value}`;
    const currentDate = new Date();
    // const currentDateFormated = `${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()}`
    const birthDate = new Date(inputDate);
    
    
    let user = {
        name: String(nameInput.value),
        birthDate: inputDate,
        weight: parseFloat(weightInput.value),
        height: Number(heightInput.value),
        gender: genderInput.value,

    }
   
    try {
        if (user.name == "" || user.name.length < 5) throw "Field “name” is invalid!";
        if (birthDate > currentDate) throw "Field “date” is invalid!"
        if(user.weight== "" || isNaN(user.weight) == true) throw "Field “weight” is invalid!";
        if(user.height == "" || isNaN(user.height) == true || Number.isInteger(user.height) == false) throw "Field “height” is invalid!";
        if(String(user.gender) == false ) throw "Field “gende” is invalid!";
    } catch (err) {
        alert (err)
        result.textContent = (err);
    } finally {
            nameResult.textContent = `Name: ${user.name}`;
            dateResult.textContent = `BirthDate: ${user.birthDate}`;
            weightResult.textContent = `Weight: ${user.weight}`;
            heightResult.textContent = `Heighta: ${user.height}`;
            genderResult.textContent = `Gender: ${user.gender}`;
            jsonResult.textContent = `${JSON.stringify(user)}`
            console.log(user);
        }
}