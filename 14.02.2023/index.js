function game(player1, player2) {
    const jogadasValidas = ["pedra", "papel", "tesoura", "lagarto", "spock"]
    if (!jogadasValidas.includes(player1) || !jogadasValidas.includes(player2)) {
        console.error("Jogada inválida!")
    }

    if (player1 === player2) {
        console.log("Empate!")
    }

    switch (player1) {
        case "pedra":
            if (player2 === "tesoura" || player2 === "lagarto") {
                console.log("Jogador 1 Ganhou!")
            } else {
                console.log("Jogador 2 Ganhou!")
            }
            break
        case "papel":
            if (player2 === "pedra" || player2 === "spock") {
                console.log("Jogador 1 Ganhou!")
            } else {
                console.log("Jogador 2 Ganhou!")
            }
            break
        case "tesoura":
            if (player2 === "papel" || player2 === "lagarto") {
                console.log("Jogador 1 Ganhou!")
            } else {
                console.log("Jogador 2 Ganhou!")
            }
            break
        case "lagarto":
            if (player2 === "papel" || player2 === "spock") {
                console.log("Jogador 1 Ganhou!")
            } else {
                console.log("Jogador 2 Ganhou!")
            }
            break
        case "spock":
            if (player2 === "pedra" || player2 === "tesoura") {
                console.log("Jogador 1 Ganhou!")
            } else {
                console.log("Jogador 2 Ganhou!")
            }
            break
    }
}

game('pedra', 'tesoura')
