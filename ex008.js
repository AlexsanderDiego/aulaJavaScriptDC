const prompt = require('prompt-sync')()

const num1 = prompt('Primeiro número? ')
const num2 = prompt('Segundo número? ')
const num3 = prompt('Terceiro número? ')


// if (num1 >= num2 && num2 >= num3) {
//     console.log(`Ordem crescente: ${num3}, ${num2}, ${num1}.`)
// } else if (num1 >= num3 && num3 >= num2) {
//     console.log(`Ordem crescente: ${num2}, ${num3}, ${num1}.`)
// } else if (num2 >= num1 && num1 >= num3) {
//     console.log(`Ordem crescente: ${num3}, ${num1}, ${num2}.`)
// } else if (num2 >= num3 && num3 >= num1) {
//     console.log(`Ordem crescente: ${num1}, ${num3}, ${num2}.`)
// } else if (num3 >= num1 && num1 >= num2) {
//     console.log(`Ordem crescente: ${num2}, ${num1}, ${num3}.`)
// } else {
//     console.log(`Ordem crescente: ${num1}, ${num2}, ${num3}.`)
// }


if (num1 >= num2 >= num3) {
    console.log(`Ordem crescente: ${num3}, ${num2}, ${num1}.`)
} else if (num1 >= num3 >= num2) {
    console.log(`Ordem crescente: ${num2}, ${num3}, ${num1}.`)
} else if (num2 >= num1 >= num3) {
    console.log(`Ordem crescente: ${num3}, ${num1}, ${num2}.`)
} else if (num2 >= num3 >= num1) {
    console.log(`Ordem crescente: ${num1}, ${num3}, ${num2}.`)
} else if (num3 >= num1 >= num2) {
    console.log(`Ordem crescente: ${num2}, ${num1}, ${num3}.`)
    console.log(num3 >= num1 >= num2)
} else {
    console.log(`Ordem crescente: ${num1}, ${num2}, ${num3}.`)
}