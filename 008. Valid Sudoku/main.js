/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    const rows = {}
    const columns = {}
    const squares = {}
    
    for (let row in board) {
        for (let column in board) {
            const cell = board[row][column]
            if (cell === '.') continue
            const square = Math.floor(row / 3) * 3 + Math.floor(column / 3)
            
            if (!rows[row]) { rows[row] = new Set() }
            if (rows[row].has(cell)) { return false }
            else { rows[row].add(cell) }

            if (!columns[column]) { columns[column] = new Set() }
            if (columns[column].has(cell)) { return false }
            else { columns[column].add(cell) }

            if (!squares[square]) { squares[square] = new Set() }
            if (squares[square].has(cell)) { return false }
            else { squares[square].add(cell) }
        }
    }

    return true
}

// Test cases
const board1 = [
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","8",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
]

const board2 = [
    ["1","2",".",".","3",".",".",".","."],
    ["4",".",".","5",".",".",".",".","."],
    [".","9","1",".",".",".",".",".","3"],
    ["5",".",".",".","6",".",".",".","4"],
    [".",".",".","8",".","3",".",".","5"],
    ["7",".",".",".","2",".",".",".","6"],
    [".",".",".",".",".",".","2",".","."],
    [".",".",".","4","1","9",".",".","8"],
    [".",".",".",".","8",".",".","7","9"]
]

console.log(isValidSudoku(board1) === true)
console.log(isValidSudoku(board2) === false)

