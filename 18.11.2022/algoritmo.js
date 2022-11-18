let qtdCarros = 0
let modelo
let ano
let valor
let maiorValor = 0
let menorValor = 0
let valorAtual

function coletarDados() {
    modelo = prompt('Informe o modelo do carro:')
    ano = prompt('Informe o ano do carro:')
    valor = prompt('Informe o valor do carro:')
}

while (qtdCarros < 3) {
    coletarDados()
    valorAtual = valor
    if (valorAtual > maiorValor) {
        maiorValor = valorAtual
    }
    if (valorAtual < menorValor) {
        menorValor = valorAtual
    }
    qtdCarros++
}
console.log('O maior valor é: ' + maiorValor)
console.log('O menor valor é: ' + menorValor)


