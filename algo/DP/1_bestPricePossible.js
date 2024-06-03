// given an array of weights and prices of items, also a bag which has the capacity W. Calculate the best price we can get by filling
// the bag without eceeding its capacity


function getBestPrice(weights, prices, capacity, currInd){
    if(capacity===0 || currInd===-1){
        return 0
    }
    if(weights[currInd]<=capacity){
        return Math.max(prices[currInd]+getBestPrice(weights, prices, capacity-weights[currInd], currInd-1),getBestPrice(weights, prices, capacity, currInd-1))
    } else {
        return getBestPrice(weights, prices, capacity, currInd-1)
    }
}

console.log( getBestPrice([7,2,4,5],[10,400,5,1],7,4))
/*

Note: recursion is a combination of base condition and choice diagram.

write a base condition then
if the capacity is less the weight of element then we can't include the item
take the max price while including the item and excluding the item
*/

let memoize = new Map()
function getBestPriceWithMemoization(weights, prices, capacity, currInd){
    let result
    if(capacity===0 || currInd===-1){
        result= 0
    } else if(memoize.has(`${capacity},${currInd}`)){
        result=memoize.get(`${capacity},${currInd}`)
    } else if(weights[currInd]<=capacity){
        result= Math.max(prices[currInd]+getBestPrice(weights, prices, capacity-weights[currInd], currInd-1),getBestPrice(weights, prices, capacity, currInd-1))
    } else {
        result= getBestPrice(weights, prices, capacity, currInd-1)
    }
    memoize.set(`${capacity},${currInd}`,result)
    return result
}

console.log( getBestPriceWithMemoization([7,2,4,5],[10,400,5,1],7,4))

// caching the data to reduce the recursion call, just to avoid stack overflow error


function getBestPriceWithTabulation(weights, prices, capacity){

    let table = [...new Array(weights.length+1)].map(_=>new Array(capacity+1)) // 2D matrix
    for(let i=0;i<weights.length+1;i++){
        table[i][0]=0
    }
    for(let i=0;i<capacity+1;i++){
        table[0][i]=0
    }
    for(let i=1;i<weights.length+1;i++){
        for(let j=1;j<capacity+1;j++){
            if(j<weights[i-1]){
                table[i][j] = table[i-1][j]
            } else {
                table[i][j] =   Math.max(prices[i-1]+table[i-1][j-weights[i-1]],table[i-1][j])
            }
        }
    }
    console.log(table[weights.length][capacity])

}

getBestPriceWithTabulation([7,2,4,5],[10,400,5,1],7)

/*
Note: the size of 2D matrix length must be greater by 1, the extra first columns are to initialise the base condition
here rows are weights and columns are the capacity starting from 0 till the capacity
we started the main loop from index 1 as we have used 0th index for base condition
for every cell we have a choice diagram of whether to include or not
if that particular cell is having capacity less than that row weight then we can't include that item into the sack
so we can ignore this item and fill the cell with the optimal value until now without including this item 
i.e. cell of previous row in the same column
or else
we have two choices -> including this item and excluding this item. but our goal is to achive the best price, so we can take max
including this item = price of this item + optimal value before including this item == go back to the cell which is weight of sack
                                            before including this item i.e. previous row and current cell column(capacity of that column) - 
                                            weight of  current item

we used j-1 for prices and weights instead of j for current element - as we added extra cell for base condition now the pointer in the matrix
will be one cell ahead of current element
*/