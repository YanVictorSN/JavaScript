let mainImage = document.querySelector("img");

mainImage.onclick = function() {
    let mainSrc = mainImage.getAttribute("src")
    if (mainSrc === "assets - 01.a/lobo.png") {
        mainImage.setAttribute("src","assets - 01.a/lua.png")
    } else {
        mainImage.setAttribute ("src","assets - 01.a/lobo.png" )
    }
}