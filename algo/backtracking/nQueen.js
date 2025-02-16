// place n queens in n*n board such that one queen can never get attached by other diagonally/row/column
// we can redefine this problem as placing n queens in n rows/columns where both the points are same.
// lets solve by considering placing queens in rows
// in this problem if the pointer hits the base condition then we achieved the desired result

function placeQueensInBoard(board, row, ans){
    if(row === board.length){
        console.log(ans,"asdf");
        return
    }
    for(ind=0;ind<=row;ind++){
        if(isSafe(board, row, ind)){
            board[row][ind] = "Q"
            ans.push(`(${row},${ind}),`)
            placeQueensInBoard(board, row+1, ans)
            ans.pop()
            board[row][ind]="."
        }
    }
}

function isSafe(board, row, ind){

    let found = false

    // we are skipping row check as we put the queens row wise which means this row doesn't have any queen


    // column
    for(let i=0; i<board.length;i++){
        if(board[i][ind]==="Q"){
            return false
        }
    }

    // diagonal
    // need to implement

}

const chessBoard = Array.from( new Array(7), ele=> new Array(7).fill(".") )

placeQueensInBoard(chessBoard,0,[])