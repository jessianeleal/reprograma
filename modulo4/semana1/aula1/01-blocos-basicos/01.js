// Escreva uma função que recebe
// um número e retorna `true` se ele
// é um numero de cartao de credito
// valido ou `false` se não.
//
// Dica: Algoritmo de Luhn.

function isValidCreditCard(card) {
    let clean_card = card.replace(/\D/g, "");
    let aux = false;
    let sum = 0;
    for(let i = clean_card.length - 1; i >= 0; i--) {
        let result = clean_card [i];
        if(aux) {
            result = (clean_card[i] * 2).toString()
            if(result.length === 2) {
               result = parseInt(result[0]) + parseInt(result[1])
           } 
        }
        sum += parseInt(result)
        aux = !aux;
    }
    return sum > 0 && sum % 10 === 0;
}

const valid_credit_cards = [
    "799 273 987 13",
    "378734493671000",
    "3714-4963-5398-431",
    "5610XXX..5910--810!18250",
    "30569309025904",
    "385 2000   0023 237",
    "6011111111111117",
    "6011000990139424",
    "353 0111 3333 00000",
    "356600 woop woop 2020360505",
    "5555555555554444",
    "5105105105105100"
]

for (const valid of valid_credit_cards) {
    console.log(isValidCreditCard(valid))
}

const invalid_credit_cards = [
    "799 223 987 13",
    "3787786493671000",
    "3724-4963-5398-431",
    "5610XX3..5910--810!18250",
    "0305699025904",
    "385 2000   0011123 237",
    "6011111111117",
    "60190139424",
    "353 0111 3333 00100",
    "3566043 woop woop 2020360505",
    "55553555555554444",
    "5105205105105100"
]

for (const invalid of invalid_credit_cards) {
    console.log(isValidCreditCard(invalid))
}