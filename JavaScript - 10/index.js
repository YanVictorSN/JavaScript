const buttonInclude = document.getElementById("include");
const buttonList = document.getElementById("list");
const result = document.getElementById("result");
let tableBody = document.getElementById("tableBody");
let array = [];
let validator = null;

buttonInclude.addEventListener("click", addNewObject)
let idProduct = 0;

function addNewObject() {
    const product = document.getElementById("product");
    const description = document.getElementById("description");
    const productValue = document.getElementById("value");
    const date = Date.now();
    const dateToday = new Date(date);
    
    let produtos = {
        id:idProduct,
        nome:product.value,
        descricao:description.value,
        valor:parseFloat(productValue.value),
        incluidoEm:dateToday.toUTCString(),
    }

    try {
       if(product.value == "") throw "Falha no cadastro do produto! Insira um nome válido"
       if(description.value == "") throw "Falha no cadastro do produto! Insira uma descrição válida"
       if(productValue.value == 0 || isNaN(productValue.value) == true) throw "Falha no cadastro do produto! Insira um valor válido"
       if(validator == null) {
        array.push(produtos);
        idProduct++;
        result.textContent = `Produto ${produtos.nome} incluído com sucesso!`;
        product.value = "";
        description.value = "";
        productValue.value = "";
        }

        if (validator !== null) {
            atualizar(validator);
        }

    } catch (err) {
        alert (err)
    }
}

buttonList.addEventListener("click",createTable)

function createTable() {

    tableBody.innerHTML = "";
    let i = 0; 
    while (i < array.length) {

        let tr = tableBody.insertRow();
        
        let tableId = tr.insertCell();
        let tableName = tr.insertCell();
        let tableValor = tr.insertCell();

        tableId.innerHTML = array[i].id;
        tableName.innerHTML = array[i].nome;
        tableValor.innerHTML = array[i].valor;

        let iconEditTable = tr.insertCell();
        let iconEditEraser = tr.insertCell();
        
        let iconEdit = document.createElement("img");
        iconEdit.setAttribute("src","imgs/editar.png");
        iconEdit.setAttribute("onclick","edit("+ JSON.stringify(array[i])+")");

        let iconEraser = document.createElement("img");
        iconEraser.setAttribute("src","imgs/botao-de-deletar.png");
        iconEraser.setAttribute("onclick", "eraser("+ array[i].id +")")

   
        iconEditTable.appendChild(iconEdit);
        iconEditEraser.appendChild(iconEraser);
        i++;
        }       
}

function edit (id) {  
    document.getElementById("product").value = id.nome;
    document.getElementById("description").value = id.descricao;
    document.getElementById("value").value = id.valor;
    document.getElementById("include").innerHTML = "Editar";
    validator = id.id;
}

function atualizar(id) {
    let z = 0;

    while (z < array.length ) {
         if(array[z].id == id) {
            array[id].nome =  document.getElementById("product").value; 
            array[id].descricao = document.getElementById("description").value;
            array[id].valor = document.getElementById("value").value;
         }
         z++
    }
    validator = null;
    createTable()

}

function eraser(id) {
    let x = 0; 
    let newArray = [];

    while (x < array.length) { 
        if (array[x].id == id) {
            tableBody.deleteRow(x);                
        } else {
            newArray.push(array[x]);
        }
        x++;
}
    array = newArray;
}
