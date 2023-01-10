function QtdShips(board) {

    let previousLineShip = false
    let ships = 0

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {

            if ((board[i][j] === 'X') && (previousLineShip == false) && (board[i + 1][j] != 'X')) {
                console.log('entrou')
                previousLineShip = true
                ships++
            }
            else {
                previousLineShip = false
            }
        }
    }
    console.log(ships)
}


const board = [['X', '.', '.', 'X'], ['.', '.', '.', 'X'], ['.', '.', '.', 'X'], ['.', '.', '.', 'X']]
QtdShips(board)