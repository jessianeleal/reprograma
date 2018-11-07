const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro")
const complemento = document.getElementById("complemento")
const bairro = document.getElementById("bairro")
const localidade = document.getElementById("localidade")
const uf = document.getElementById("uf")
const erro = document.getElementById("cep-error");

cep.addEventListener("focus", function(evento) {
    document.getElementById("cep-error").style.display="none";
    cep.value = ""
    logradouro.value = "";
    complemento.value = "";
    bairro.value = "";
    localidade.value = "";
    uf.value = "";
})

cep.addEventListener("blur", function(evento) {
    evento.preventDefault();
    let json1 = "https://viacep.com.br/ws/";
    let json2 = this.value;
    let json3 = "/json/";
    let json = json1 + json2 + json3;
    logradouro.value = "...";
    complemento.value = "...";
    bairro.value = "...";
    localidade.value = "...";
    uf.value = "...";
    get_data (json)
    .then(function (data) {
        const dados = JSON.parse(data);
        if(dados.erro == true)  {
            cep.value = ""
            logradouro.value = "";
            complemento.value = "";
            bairro.value = "";
            localidade.value = "";
            uf.value = "";
            document.getElementById("cep-error").style.display="flex";
        } else { 
            logradouro.value = dados.logradouro;
            complemento.value = dados.complemento;
            bairro.value = dados.bairro;
            localidade.value = dados.localidade;
            uf.value = dados.uf;
            document.getElementById("cep-error").style.display="none";
        }
    })
    .catch(function(error) {
    })
})

