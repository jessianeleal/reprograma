const botao = document.querySelector(".cadastro__button");
const inputNome = document.getElementById("cadastroInputNome");
const inputEmail = document.getElementById("cadastroInputEmail");
const inputConfirmaEmail = document.getElementById("cadastroInputEmailConfirm");
const inputSenha = document.getElementById("cadastroInputPassword");
const inputConfirmaSenha = document.getElementById("cadastroInputPasswordConfirm");
const inputPhone = document.getElementById("cadastroInputPhone");
const inputArea = document.getElementById("cadastroInputArea");
const inputNivel = document.getElementsByName("level");
const inputNews = document.getElementById("cadastroInputNews");


botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const optionSelect = inputArea.options[inputArea.selectedIndex];
    
    let radioItem;

    for (let i = 0; i < inputNivel.length; i++) {
        if (inputNivel[i].checked) {
            radioItem = inputNivel[i];
        } 
    }

    if (inputNome.value === undefined || inputNome.value === null || inputNome.value === "" || inputNome.value === " ") {
        inputNome.focus();
        return false;
    }
    else if (inputEmail.value === undefined || inputEmail.value === null || inputEmail.value === "" || inputEmail.value === " ") {
        inputEmail.focus();
        return false;
    }
    else if (inputConfirmaEmail.value === undefined || inputConfirmaEmail.value === null || inputConfirmaEmail.value === "" || inputConfirmaEmail.value === " ") {
        inputConfirmaEmail.focus();
        return false;
    }
    else if (inputSenha.value.length < 8) {
        alert("Senha inválida, digite no mínimo 8 dígitos.")
    }
    else if (inputSenha.value === undefined || inputSenha.value === null || inputSenha.value === "" || inputSenha.value === " ") {
        inputSenha.focus();
        return false;
    }
    else if (inputConfirmaSenha.value === undefined || inputConfirmaSenha.value === null || inputConfirmaSenha.value === "" || inputConfirmaSenha.value === " ") {
        inputConfirmaSenha.focus();
        return false;
    }
    else if (inputPhone.value === undefined || inputPhone.value === null || inputPhone.value === "" || inputPhone.value === " ") {
        inputPhone.focus();
        return false;
    }
    else if (inputEmail.value !== inputConfirmaEmail.value) {
        alert("Você digitou dois emails diferente, tente novamente.")
    }
    else if (inputSenha.value !== inputConfirmaSenha.value) {
        alert("Você digitou duas senhas diferente, tente novamente.")
    }
    else if (optionSelect.value === undefined || optionSelect.value === null || optionSelect.value === "" || optionSelect.value === " ") {
        alert("Área não selecionada, selecione e tente novamente!")
    }
    else if (inputNews.checked !== true) {
        alert("É uma pena que você não deseja receber nosso conteúdo exclusivo! :c")
    }

    if (inputArea.value === "Front-End") {
        document.querySelector("body").bgColor = "blue";
    }
    else if (inputArea.value === "Back-End") {
    document.querySelector("body").bgColor = "green";
    }
    else if (inputArea.value === "UX Designer") {
        document.querySelector("body").bgColor = "pink";
    }
    else if (inputArea.value === "UI Designer") {
    document.querySelector("body").bgColor = "orange";
    }

    if (radioItem.value === "Junior") {
        console.log("0 - 2 anos de experiência");
    }
    else if (radioItem.value === "Pleno") {
        console.log("2 - 5 anos de experiência");
    }
    else if (radioItem.value === "Senior") {
        console.log("5+ anos de experiência");
    }   

    alert("Cadastro realizado com sucesso!")

    document.querySelector("body").style.bgColor = "#fff";

    const form = this.closest("form");
    form.submit();
})

inputConfirmaEmail.addEventListener("paste", function(evento){
    evento.preventDefault();
    return false;
})
