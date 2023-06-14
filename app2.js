const prompt = require('prompt-sync')()

const nome = prompt('Digite seu nome: ')

const idade = prompt('Digite sua idade: ')

const maiorIdade = 18

console.log(`oi ${nome}`)
console.log(`sua idade é ${idade}`)
if (idade < maiorIdade) {
    console.log(`Voce não pode pagar boleto`)
} else {
    console.log(`Parabéns, já pode pagar boleto`)
}

