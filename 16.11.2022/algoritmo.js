let loop = true
let salarios = 0
let filhos = 0
let i = 1
while (loop === true) {
    let salario = prompt("Informe o seu salário:")
    if (salario < 0) {
        loop = false
    }
    let numFilhos = prompt("Informe o número de filhos:")
    salarios = salarios + salario
    filhos = filhos + numFilhos
    let mediaSalarial = salarios / i
    let mediaFilhos = filhos / i

    console.log("media salarial da população: " + mediaSalarial)
    console.log("\nmedia de filhos: " + mediaFilhos)
    i++

}