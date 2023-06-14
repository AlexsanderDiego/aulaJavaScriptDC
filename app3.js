const prompt = require('prompt-sync')()

const numero = prompt('Digite um numero: ')
const restoDivisão = numero % 2

if (restoDivisão == 0) {
    console.log(`${numero} é Par`)
} else {
    console.log(`${numero} é Impar`)
}
