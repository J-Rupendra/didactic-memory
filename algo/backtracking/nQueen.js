// place n queens in n*n board such that one queen can never get attached by other diagonally/row/column
// we can redefine this problem as placing n queens in n rows/columns where both the points are same.
// lets solve by considering placing queens in rows
// in this problem if the pointer hits the base condition then we achieved the desired result

function placeQueensInBoard(board, row){
    if(row === board.length){
        console.log(board.map(row=>row.join("")));
        return
    }
    for(let col=0;col<board.length;col++){
        if(isSafe(board, row, col)){
            board[row][col] = "Q"
            placeQueensInBoard(board, row+1)
            board[row][col]="."
        }
        
    }
}

function isSafe(board, row, col){

    // we are skipping row check as we put the queens row wise which means this row doesn't have any queen


    // column
    for(let i=0; i<row;i++){
        if(board[i][col]==="Q"){
            return false
        }
    }

    // upper left diagonal
    for(let i=row-1,j=col-1; i>=0 && j>=0;i--,j--){
        if(board[i][j]==="Q"){
            return false
        }
    }
    // upper right diagonal
    for(let i=row-1,j=col+1; i>=0 && j<board.length;i++,j++){
        if(board[i][j]==="Q"){
            return false
        }
    }
    return true

}

const chessBoard = Array.from( new Array(4), ele=> new Array(4).fill(".") )

placeQueensInBoard(chessBoard,0,[])

// time complexity = O(n!) => if we place a queen in a row then then next row has n-1 possibilities and then next row will have n-2 ....1