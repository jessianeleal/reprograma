const botao = document.querySelector(".login__button");

botao.addEventListener("click", function(evento) {
    evento.preventDefault();
    document.querySelector(".login-modal").style.display = "flex";
})

const botaoClose = document.querySelector(".login-modal__button-close");

botaoClose.addEventListener("click", function(evento) {
    evento.preventDefault();
    document.querySelector(".login-modal").style.display = "none";
})

