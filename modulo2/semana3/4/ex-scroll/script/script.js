const botao = document.getElementById("arrowTop");

window.addEventListener("scroll", function(){
    console.log(pageYOffset);
    if (pageYOffset > 290) {
        botao.hidden = false;
    }
    else {
        botao.hidden = true;
    }
})

botao.addEventListener("click", function() {
    window.scrollTo(pageYOffset, 0);



})
