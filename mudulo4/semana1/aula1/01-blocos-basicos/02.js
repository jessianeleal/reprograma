// Escreva uma função que recebe
// um RG não formatado e retorna ele
// formatado. Exemplo: "5 5555553" -> "5.555.555-3"

function formatRG(unformatted) {
   
    let clean_rg = unformatted.replace(/\D/g, "");
    
    if(clean_rg.length==8){
        clean_rg = clean_rg.replace(/(\d{1})(\d{3})(\d{3})(\d{1})/, "$1.$2.$3-$4" );
        return clean_rg;
    } else {
        alert("RG inválido, digite o número no formato: 12345678");
    }
}
