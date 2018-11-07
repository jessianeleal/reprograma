const cpf = document.getElementById("cpf");

cpf.addEventListener("focus", function(evento) {
    // evento.preventDefault();
    this.value = "___.___.___-__";
    setTimeout(function() {
        cpf.setSelectionRange(0,0);
    }, 15)
 })

 cpf.addEventListener("blur", function(evento) {
    if(this.value === "___.___.___-__") {
    this.value = "";
    }
 })

 cpf.addEventListener("keydown", function(evento){
    evento.preventDefault();
    if ("0123456789".indexOf(evento.key) !== -1 && this.value.indexOf("_") !== -1) {
        this.value = this.value.replace(/_/, evento.key);
        const next_index = this.value.indexOf("_");
        this.setSelectionRange(next_index, next_index);
    } else if (evento.key === "Backspace") {
        this.value = this.value.replace(/(\d$)|(\d(?=\D+$))/, "_");  
        const next_index = this.value.indexOf("_");
        this.setSelectionRange(next_index, next_index);   
     }
 })