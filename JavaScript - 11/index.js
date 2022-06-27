const buttonInclude = document.getElementById("include");
const buttonList = document.getElementById("list");
const result = document.getElementById("result");

let tableBody = document.getElementById("tableBody");

const product = document.getElementById("product");
const description = document.getElementById("description");
const productValue = document.getElementById("value");

const productModal = document.getElementById('productModal');
const descriptionModal = document.getElementById('descriptionModal');
const valueModal = document.getElementById('valueModal');
const timeModal = document.getElementById('timeModal');


let array = [];
let validator = null;
let idProduct = 0;

let produtos = {};
let copyArray = {};

let changeButton = 0;
buttonInclude.addEventListener("click", addNewObject)

function addNewObject() {

   
    const date = Date.now();
    const dateToday = new Date(date);
    const day = String(dateToday.getDate()).padStart(2, '0');
    const month = String(dateToday.getMonth() + 1).padStart(2, '0');
    const year = dateToday.getFullYear();
    const hours = dateToday.getHours();
    const minutes = dateToday.getMinutes();

    const dateFormated = `${day}/${month}/${year} às ${hours}:${minutes}`
   

    produtos = {
        id:idProduct,
        nome:product.value,
        descricao:description.value,
        valor:parseFloat(productValue.value),
        incluidoEm:dateFormated,
    }

    try {
       if(product.value == "") throw "Falha no cadastro do produto! Insira um nome válido"
       if(description.value == "") throw "Falha no cadastro do produto! Insira uma descrição válida!"
       if(productValue.value == 0 || isNaN(productValue.value) == true) throw "Falha no cadastro do produto! Insira um valor válido"
       if(validator == null) {
        array.push(produtos);
        idProduct++;
        result.textContent = `Produto ${produtos.nome} incluído com sucesso!`;
        product.value = "";
        description.value = "";
        productValue.value = "";
        setInterval (clearresultInclude, 3000);
        }

        if (validator !== null) {
            atualizar(validator);
        }

    } catch (err) {
        result.textContent = err;
        setInterval (clearresultInclude, 3000);   
    }
    changeButton = 0;
    if ( changeButton == 0) {
        buttonInclude.innerHTML = "Incluir Produtos";
        product.value = "";
        description.value = "";
        productValue.value = "";
    }
    
}

buttonList.addEventListener("click",createTable)

function createTable() {
    tableBody.innerHTML = "";
    
    for (let i = 0; i < array.length;i++) {

        let tr = tableBody.insertRow(i);
        
        let tableId = tr.insertCell(0);
        let tableName = tr.insertCell(1);
        let tableValor = tr.insertCell(2);

        tableId.innerHTML = array[i].id;
        tableName.innerHTML = array[i].nome;
        tableValor.innerHTML = array[i].valor;

        tableId.style.cursor = 'pointer';

        let iconEditTable = tr.insertCell();
        let iconEditEraser = tr.insertCell();

        tableId.addEventListener('click', ()=>{descriptionId(array[i].id)});
        
        let iconEdit = document.createElement("img");
        iconEdit.setAttribute("src","imgs/editar.png");
        iconEdit.style.cursor = 'pointer';
        iconEdit.setAttribute("onclick",`edit(${JSON.stringify(array[i])})`);

        let iconEraser = document.createElement("img");
        iconEraser.setAttribute("src","imgs/botao-de-deletar.png");
        iconEdit.style.cursor = 'pointer';
        iconEraser.setAttribute("onclick", `eraser(${array[i].id})`)

        iconEditTable.appendChild(iconEdit);
        iconEditEraser.appendChild(iconEraser);

        }       
}

//Editar
function edit (e) {  
    changeButton = 1;
    document.getElementById("product").value = e.nome;
    document.getElementById("description").value = e.descricao;
    document.getElementById("value").value = e.valor;
    
    if (changeButton == 1) {
        document.getElementById("include").innerHTML = "Editar";
    }
  
    
    validator = e.id;
}

//Atualizar
function atualizar(e) { 

    for (let z = 0; z < array.length;z++ ) {
         if(array[z].id == e) {
            array[e].nome =  product.value; 
            array[e].descricao = description.value;
            array[e].valor = productValue.value
         }
    }
    validator = null;
    createTable()
}
//Deletar
function eraser(e) {
    for (let x = 0; x < array.length; x++) { 
        if (array[x].id == e) {
            array.splice(x,1)
            tableBody.deleteRow(x);                
        } 
}
}

//Modal Descrição
function descriptionId (e) {
    for (let w =0; w < array.length; w++) {
        if (array[w].id == e) {
            document.getElementById("modalDescription").style.visibility = "visible"

            productModal.innerHTML = `Produto:${array[w].nome}`
            descriptionModal.innerHTML = `Descrição: ${array[w].descricao}`
            valueModal.innerText = `Valor: ${array[w].descricao}`
            timeModal.innerHTML =  `Incluido em: ${array[w].incluidoEm}`          
        }
    }
}

//Deletar Modal
const deleteModal = document.getElementById('exitImg');

deleteModal.addEventListener('click', modalDelete);

function modalDelete() {
    document.getElementById("modalDescription").style.visibility = "hidden"
}


//Sortear por Nome
const productSort = document.getElementById("productSort");

productSort.addEventListener("click", sortProduct)

function sortProduct (a,b)  {
    const nameSort = array.sort((a,b) => {
        if(a.nome < b.nome) return -1;
        return 1;
    })
    array = nameSort;
    createTable()  
}

//Sortear por Valor
const valueSort = document.getElementById("valueSort");
valueSort.addEventListener("click", sortValue)

function sortValue (a,b)  {
    const nameSort = array.sort((a,b) => {

        return a.valor - b.valor;
    })
    array = nameSort;
    createTable()  
}

//Pesquisar
const search = document.getElementById('search');
const searchButton = document.getElementById('searchButton');
const resultSearch = document.getElementById("resultSearch");

searchButton.addEventListener('click', searchFilter);

let = countProducts = 0;

function searchFilter() {

    copyArray = [...array];

    const inputValue = search.value;

    if (inputValue == '') {
        array = copyArray;
        createTable();
    } else {
        const filterSearch = array.filter(function(produtos) {
       
            if (produtos.nome.includes(inputValue) || produtos.descricao.includes(inputValue)) {
                countProducts++;
                resultSearch.innerHTML = `Foram encontrado(s) 
                ${countProducts}`;
                return true
            } else {
                return false
            }
            
        })
        if (countProducts == 0) {
            resultSearch.innerHTML = `Não foram encontrados produtos conforme chave de pesquisa!`
            setInterval (clearresultSearch, 3000);
        }
            countProducts = 0;
            array = filterSearch;
            createTable();
            array = copyArray;
    }
}

//Limpar Textos com tempo
function clearresultSearch() {
    resultSearch.innerHTML = '';
}
function clearresultInclude() {
    result.textContent = '';
}
