const prompt = require('prompt-sync')()

// let numero1 = Number(prompt('Digite um numero: '))
// let numero2 = Number(prompt('Digite um numero: '))

function calcularMedia(numero1, numero2) {
    let media = (numero1 + numero2)/2
    return media
}

let mediaNota = calcularMedia(1,9)

console.log(mediaNota)

