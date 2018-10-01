
const botao = document.querySelector(".tweet-composer__button");
const inputTweet = document.getElementById("tweetComposerInput")
const tweetTimeLine = document.querySelector(".tweets-timeline");

const contador = document.getElementById("tweetComposerCounter");
const textBox = inputTweet;
const maxLength = 140;


// evento do botão gerador de tweets
botao.addEventListener("click", function(evento) {
    evento.preventDefault();

    if(inputTweet.value === undefined || inputTweet.value === null || inputTweet.value === "" || inputTweet.value === " "){
        return false;
    }

    const newTweetBox = document.createElement("div");  /*Cria a div que abraça todos os elementos*/

    let dayName = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
    let monName = new Array ("Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez");

    const now = new Date;

    let dia = now.getDate();
    let hora = now.getHours();
    let minuto = now.getMinutes();
    let segundos = now.getSeconds();

    // Ou (Para formartar a data)
    // const month = now.toLocaleString("pt-br", {month: "short"});
    // const day = now.getDate();
    // ${day} de ${month}


    if (dia < 10) {
        dia = "0" + dia;
    }
    else if (hora < 10) {
        hora = "0" + hora;
    }
    else if (minuto < 10) {
        minuto = "0" + minuto;
    }
    else if (segundos < 10) {
        segundos = "0" + segundos;
    }

    // bloco de texto dos tweets
    newTweetBox.innerHTML += 
    `<div class="tweets-timeline__box">
        <div class="tweets-timeline__header">
            <span class="tweets-timeline__name">Jessiane Leal</span>
            <span class="tweets-timeline__username">@sianeleal</span>
            <span class="tweets-timeline__date">${dayName[now.getDay()]}, ${dia} de ${monName [now.getMonth()]} de ${now.getFullYear()} ${hora}:${minuto}:${segundos}hs</span>   
        </div>
        <p class="tweets-timeline__tweet">
            ${inputTweet.value}
        </p>
        <div class="tweets-timeline__delete-button">
            <button>Excluir</button>
        </div>
    </div>`; 

    
    tweetTimeLine.insertBefore(newTweetBox, tweetTimeLine.childNodes[0]);
    
    if (inputTweet.value !== "") {
        inputTweet.value = "";
    }
    
    const botaoExcluir = document.querySelector(".tweets-timeline__footer");
    
    // evento do botão de excluir
    botaoExcluir.addEventListener("click", function(evento) {
        evento.preventDefault();
        newTweetBox.remove();
    })

    // reseta ao valor inicial de caracteres
    const valorAtual =  maxLength - textBox.value.length;
    contador.innerHTML = valorAtual;
    valorAtual.value = 140;
})

// evento do contador de caracteres
inputTweet.addEventListener("input", function () {
    const valorAtual =  maxLength - textBox.value.length;
    contador.innerHTML = valorAtual;

    if (valorAtual <= 15) {
    contador.style.color = "red";
   }
   else {
       contador.style.color = "white";  
   }

   if (valorAtual < 0) {
    botao.disabled = true;
    console.log("Oh")
   }
   else {
       botao.disabled = false;
   }
})