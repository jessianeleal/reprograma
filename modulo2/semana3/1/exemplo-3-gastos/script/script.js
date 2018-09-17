const botao = document.querySelector(".transacao__button");
const transacao = document.querySelector(".transacao__form");



botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const tabela = document.querySelector(".extrato__table");
    
    // criar linha
    const linha = document.createElement("tr");

    // criar colunas
    const coluna = document.createElement("td");
    const coluna2 = document.createElement("td");
    const coluna3 = document.createElement("td");

    // iserir colunas na tabela
    linha.appendChild(coluna);
    linha.appendChild(coluna2);
    linha.appendChild(coluna3);

    // valor do input
    const nomeTransacao = document.getElementById("transacaoInputName").value;
    const valoTransacao = document.getElementById("transacaoInputMoney").value;
    const dataTransacao = document.getElementById("transacaoInputDate").value;

    // criar texto
    const textoNome = document.createTextNode(nomeTransacao)
    const textoValor = document.createTextNode(valoTransacao)
    const textoData = document.createTextNode(dataTransacao)

    // inserir texto na coluna
    coluna.appendChild(textoNome)
    coluna2.appendChild(textoValor)
    coluna3.appendChild(textoData)

    // adicionar linha a tabela
    tabela.appendChild(linha);

    console.log(tabela);
})



 