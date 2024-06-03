// Given two arrays len -> length of rod pieces and price-> price of each rod equal to that elements length. A rod length N isgiven
// Need to cut rod into any number of pieces possible, so that we can get the max price.

/*
In this problem as we can cut rod into same pieces more than once we can use unbound knapsack approach
we can also check this problem like, max price we get by adding the lenghts to get the rod length capacity
*/

function getHighestPriceFromRodCutting(lengths, prices, rodLength){
    let matrix = [...new Array(lengths.length+1)].map(_=>new Array(rodLength+1))
    for(let i=0;i<matrix.length;i++){
        matrix[i][0] = 0
    }
    for(let i=0;i<matrix[0].length;i++){
        matrix[0][i] = 0
    }
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(j<lengths[i-1]){
                matrix[i][j] = matrix[i-1][j]
            } else {
                // we are referring to same row because we can take the same item any number of times
                matrix[i][j] = Math.max(prices[i-1]+matrix[i][j-lengths[i-1]],matrix[i-1][j])
            }
        }
    }
    console.table(matrix); // take the last element
}

getHighestPriceFromRodCutting([1,2,3,4,5,6,7,8],[1,5,8,9,10,17,17,20],8)