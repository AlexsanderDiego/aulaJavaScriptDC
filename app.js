const prompt = require('prompt-sync')()

// const nome = prompt('')
// console.log(`Oi ✌ ${nome}`)

let num1 = 50
let num2 = '50'

let expressao = num1 == num2

if (expressao) {
    console.log(`num1 igual num2`)
} //else if (num1 igual num2) {
   // console.log(`O numero ${num2} é igual que o número ${num1}`)}
 else {
    console.log(`num1 diferente num2`)
}