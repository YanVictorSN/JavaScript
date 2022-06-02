let mainImage = document.querySelector("img");

mainImage.onclick = function() {
    let mainSrc = mainImage.getAttribute("src")
    if (mainSrc === "../assets/imgs/lobo.png") {
        mainImage.setAttribute("src","../assets/imgs/lua.png")
    } else {
        mainImage.setAttribute ("src","../assets/imgs/lobo.png" )
    }
}