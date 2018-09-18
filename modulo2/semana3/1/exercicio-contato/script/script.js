const botao = document.querySelector(".contato__button");
const inputNome = document.getElementById("contatoInputNome");
const inputEmail = document.getElementById("contatoInputEmail");
const inputPhone = document.getElementById("contatoInputPhone");
const inputMensagem = document.getElementById("contatoInputMensagem");

botao.addEventListener("click", function(evento){
    evento.preventDefault();
    if (inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " ") {
        inputNome.focus();
        return false;
    }
    else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus();
        return false;
    }
    else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " ") {
        inputPhone.focus();
        return false;
    }
    else if (inputMensagem.value === undefined || inputMensagem.value === null || inputMensagem.value === "" || inputMensagem.value === " ") {
        inputMensagem.focus();
        return false;
    }
    alert("Mensagem enviada com sucesso!)
})