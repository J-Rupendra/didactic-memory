// Given an array of coins and a value. Find the number of ways we can add coins to get the desired value. 
// coins supply is infinite

/*
This is similar to subsetsCountWithSum.
we can use unbound knapsack as it is mentioned that we can use same coin infinite number of times.
0-> not possible with i number of items to form value j
1-> possible
*/


function countCoinsSubsetSum(coins, sum){
    let matrix = [...new Array(coins.length+1)].map(_=>new Array(sum+1))
    for(let i=0;i<matrix.length;i++){
        matrix[i][0] = 1  // we can get the sum 0 with empty subset 
    }
    for(let i=1;i<matrix[0].length;i++){
        matrix[0][i] = 0  // can't get sum 0 with any item other than empty set
    }
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(j<coins[i-1]){
                matrix[i][j] = matrix[i-1][j]
            } else {
                matrix[i][j] = matrix[i][j-coins[i-1]] + matrix[i-1][j]
            }
        }
    }
    console.table(matrix)
}

countCoinsSubsetSum([1,2,3],5)