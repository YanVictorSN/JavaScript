let button = document.querySelector("button");

button.addEventListener ("click", function(e) {
    let select = document.getElementById("selected").selectedIndex;
    let img = document.getElementById("imgs-selected");

    switch (select) {
        case 0:
           img.setAttribute("src","assets/bola-de-praia.png")
            break;
        case 1:
            img.setAttribute("src","assets/chapeu-de-pamela.png")
            break;
        case 2:
            img.setAttribute("src","assets/churrasco.png")
            break;
        case 3:
            img.setAttribute("src","assets/coquetel.png")
            break;
        case 4:
            img.setAttribute("src","assets/flamingo.png")
            break;
    }
    e.preventDefault()
})

