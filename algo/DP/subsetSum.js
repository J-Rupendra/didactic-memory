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
once we achieve the desired sum we can return the result.
*/