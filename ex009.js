/* Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas: 
● para homens: (72.7 * h) – 58; 
● para mulheres: (62.1 * h) – 44.7. */

const prompt = require('prompt-sync')()

const altura = Number(prompt('Digite sua altura (metros):  '))
const sexo = prompt('Digite seu sexo (M ou F):  ').toUpperCase()
let pesoIdeal = 0

if (sexo[0] == 'M') {
    pesoIdeal = (72.7 * altura) - 58
    console.log(`Você é do sexo ${sexo[0]}. Seu peso ideal é ${pesoIdeal}`)
} else if (sexo == 'F') {
    pesoIdeal = (62.1 * altura) - 44.7
    console.log(`Você é do sexo ${sexo[0]}. Seu peso ideal é ${pesoIdeal}`)

} else {
    console.log('Informe Masculino ou Feminino')
}