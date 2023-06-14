//p1 = operação - + - * /
//p2 3 p3 = numeros
//retorno = resultado da operação

function calcular(operacao, num1, num2) {
    if (operacao == 'soma') {
        return num1 + num2
    } else if (operacao == 'subtracao') {
        return num1 - num2
    } else if (operacao == 'multiplicacao') {
        return num1 * num2
    } else if (operacao == 'divisao') {
        return num1 / num2
    } else {
        return 'operação invalida'
    }
}

let operacao = 'SOMA'.toLowerCase()

let resultado1 = calcular(operacao, 3, 4)
let resultado2 = calcular('divisao', 5, 0)
let resultado3 = calcular('divisão', 5, 1)

console.log(resultado1)
console.log(resultado2)
console.log(resultado3)
console.log(operacao)