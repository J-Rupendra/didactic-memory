// https://leetcode.com/problems/valid-sudoku/description/

// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.

// Note:
// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

function isValidSudoku(board){
    const row = Array.from({length:9}, ()=>new Set()), col = Array.from({length:9}, ()=>new Set()), box = Array.from({length:9}, ()=>new Set())
    for(let r=0;r<9;r++){
        for(let c=0;c<9;c++){
            if(board[r][c]===".") continue
            const val = board[r][c]
            const boxInd = Math.floor(r/3)*3 + Math.floor(c/3)
            if(row[r].has(val) || col[c].has(val) || box[boxInd].has(val)){
                return false
            }
            row[r].add(val)
            col[c].add(val)
            box[boxInd].add(val)
        }
    }
    return true
}

const testData1 = [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
const testData2 = [["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(testData1))

/*
This problem is solved in single iteration O(m*n) 9*9.
on the go we have segrigated the current element belons to which column set, row set, box set.
The trick to find the box index is
column:
    box will be changed for every three columns where 0,1,2 belongs to box 1. 3,4,5 belongs to box 2 etc.
    so division of 3 will give the box values
Row:
    for every 3 rows the boxes will increase by 3 so the formula is (index/3)*3
Adding these two values will give the correct placement of box in sudoku which is Math.floor(r/3)*3 + Math.floor(c/3)

*/