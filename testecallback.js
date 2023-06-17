const soma = (n1, n2) => {
    return n1+n2
}

const subtracao = (n1, n2) => {
    return n1-n2
}

const multiplicacao = (n1, n2) => {
    return n1*n2
}

const divisao = (n1, n2) => {
    return n1/n2
}

const executaFuncao = (operacao, n1, n2) => {
    return operacao(n1, n2)
}

// console.log(soma(3, 6))
console.log(executaFuncao(divisao, 3, 6))
