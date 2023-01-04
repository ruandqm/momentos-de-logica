function QtdShips(board) {

    let previousShip = false
    let ships = 0
    let xPositions = []

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if ((board[i][j] === 'X') && (previousShip == false)) {
                previousShip = true
                xPositions.push(j)
                ships++
            }
            else {
                previousShip = false
            }
        }
    }
    for (let i = 0; i < xPositions.length; i++) {
        for (let j = 1; j < xPositions.length + 1; j++) {
            if (xPositions[i] == xPositions[j]) {
                ships--
            }
        }
    }
    console.log(ships)
}


const board = [['X', '.', '.', 'X'], ['.', '.', '.', 'X'], ['.', '.', '.', 'X'], ['.', '.', '.', 'X']]
QtdShips(board)