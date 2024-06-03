// Given an array of numbers and sum, return boolean which says the is there any subset which satisfies the sum.
//similar to best price possible sum, refer that program to get the clarity

function isSubsetPrestWithSum(arr,sum){
    if(sum===0) {
        console.log(true); // any empty subset can form sum 0
        return
    }
    let matrix = [...new Array(arr.length+1)].map(_=>new Array(sum+1)) // taken extra space to store the base condition
    // i stores array elements index
    // j stores sum from 0 to sum+1
    for(let i=0;i<arr.length+1;i++){
        matrix[i][0] = 0
    }
    for(let i=1;i<sum+1;i++){
        matrix[0][i] = 0  
    }

    for(let i=1;i<matrix.length;i++){
        for(j=1;j<matrix[0].length;j++){
            if(j<arr[i-1]){
                matrix[i][j] = matrix[i-1][j]
            } else {
                matrix[i][j] = arr[i-1]+matrix[i-1][j-arr[i-1]]<=j?arr[i-1]+matrix[i-1][j-arr[i-1]]:matrix[i-1][j]
            }
            if(j===sum && matrix[i][j] === sum){
                console.log(true)
                return
            }
        }
    }
    console.log(false)
}

isSubsetPrestWithSum([2,3,7,8,10],11)
isSubsetPrestWithSum([2,3,7,8,10],14)

/*
every cell in the building matrix will give you the result for sub problem.
matrix[i,j] = will have the result of sub problem of optimal possible value of sum j with i length of elements
by using this sub problem solution we can build the next cell. which inturn solves the bigger problem
this is called dynamic programming.

a particular row in the table will give the possibility of sum including the rowth length of elements.
Hence the every cell in the last row will give you the possibility of sum(j) including all the elements.

once we achieve the desired sum we can return the result.

this can be solved in another way also, instead of calculating sum.
create the matrix with first column as true -> because sum 0 can be formed with empty subset
first row as false from index 1 -> empty subset can never form any sum other than 0
follw the same condition to fill cells which has j<arr[i-1]
in else condition as we are filling boolean values instead of max check with or condition between including and excluding
which looks like  matrix[i-1][j-arr[i-1]] || matrix[i-1][j]  (as till the j-arr[i-1] cell there is a subset present, so including current element will give the exect sum of the excpected cell) || excluding this element
we get the resulted bnoolean in last cell

here i-1 -> previous row
arr[i-1] -> current element as we have taken 0th index for base condition.
*/