const botao = document.querySelector(".feedback__button");

botao.addEventListener("click", function(evento){
    evento.preventDefault();

    // pega o texto digitado
    const mensagem = document.getElementById("feedbackInputMessage").value;

    // chama o local que vai ser add o texto
    const inputMensagem = document.querySelector(".testimonials");

    // cria o campo do texto
    const depoimento = document.createElement("p");

    // cria um texto
    const textoMensagem = document.createTextNode(mensagem);

    // add o valor no texto criado
    depoimento.appendChild(textoMensagem)
    
    // add o texto já com o valor add no campo criado
    inputMensagem.appendChild(depoimento)

    console.log(textoMensagem)
})

