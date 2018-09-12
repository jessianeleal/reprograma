// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]

// let arr = [0, 0, 0, 0, 0]
// let arr2 = []

// for (let linha = 0; linha < 5; linha++) {    
//     arr2.push
//     console.log(arr) 
// }

let arr = []
for (let i = 0; i < 5; i++) {
    let linha = []
    for (let i = 0; i < 5; i++){
        linha.push(0)
    }
    arr.push(linha)
}
console.log(arr)


// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]

let arr = []
for (let i = 0; i < 5; i++) {
    let linha = []
    for (let j = 0; j < 5; j++){
        linha.push(Math.abs(j - i))
    }
    arr.push(linha)
}
console.log(arr)

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *

for (i = 7; i > 0; i--){
    let ast = "*"
    for (j = 1; j < i; j++) {
        ast = ast + "*"
    }
    console.log(ast)
}



// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 

for (let j = 1; j <= 7; j++) {
    let ast = ""
    for (let k = 1; k <= j; k++) {
        ast += k
    }
    for (let i = j; i < 7; i++) {
        ast += "*"
    }  
    console.log(ast)
}