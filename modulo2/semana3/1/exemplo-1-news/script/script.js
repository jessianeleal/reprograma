// const input = document.getElementById("newsInputEmail");
// const botao = document.querySelector(".news__button");

// botao.addEventListener("click", function(evento) {
//     evento.preventDefault();
//     const email = input.value;
//     const loginform = document.querySelector(".news__form");
//     loginform.innerHTML = `Login com o email ${email} realizado com sucesso!`
//     // alert(`Email (${email}) cadastrdo com sucesso!`);
// });

// const input = document.getElementById("newsInputEmail");
// const botao = document.querySelector(".news__button");

// botao.addEventListener("click", function(evento) {
//     evento.preventDefault();

//     const resposta = document.createElement("span");
//     const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");
//     resposta.appendChild(respostaMensagem);
    
//     const newsForm = document.querySelector(".news_form");

//     newsForm.insertBefore(resposta, newsForm.childNodes[0]);
// });

const input = document.getElementById("newsInputEmail");
const botao = document.querySelector(".news__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    const resposta = document.createElement("span");
    const respostaMensagem = document.createTextNode("Email cadastrado com sucesso!");
    
    resposta.appendChild(respostaMensagem);

    const newsForm = document.querySelector(".news__form");

    newsForm.insertBefore(resposta, newsForm.childNodes[0]);
})