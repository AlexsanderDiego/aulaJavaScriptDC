const prompt = require('prompt-sync')()

function conversorTemperatura ( temperatura, medida) {
    if (medida == 'FAHRENHEIT') {
        return (temperatura * 1.8) + 32
    } else if (medida == 'KELVIN') {
        return (temperatura  + 273.15)
    } else {
        return 'Unidade de conversão invalida.'
    }
}

let temperatura = Number(prompt('Temperatura para converter: '))
let unidadeMedida = prompt('Unidade de medida (kelvin ou fahrenheit): ').toUpperCase()

let temperaturaConvertida =  conversorTemperatura(temperatura, unidadeMedida)

console.log (`A temperatura ${temperatura} em graus celsius é igual a ${temperaturaConvertida} na unidade ${unidadeMedida}`)
console.error (`A temperatura`)
console.warn (`A temperatura`)