// const inputEmail = document.getElementById("loginInputEmail")
// const inputSenha = document.getElementById("loginInputPassword")
// const botao = document.querySelector(".login__button");

// botao.addEventListener("click", function(evento) {
//     evento.preventDefault();
//     const email = inputEmail.value;
//     const loginform = document.querySelector(".login__form");
//     loginform.innerHTML = `Login com o email ${email} realizado com sucesso!`
//     //  alert(`Login com o email ${email} realizado com sucesso!`);
// });


const input = document.getElementById("loginInputEmail");
const inputSenha = document.getElementById("loginInputPassword")
const botao = document.querySelector(".login__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode("Login efetuadi com sucesso!");
    
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".login");

    newsForm.insertBefore(resposta, newsForm.childNodes[2]);
})