// Given an array of elements. return boolean if the array can be partitioned into two subsets where each subset gives the same sum

/*
if sum of all the elements in the array is even then only we can divide else the division will give decimal point result
so if sum is an even number then make use of the subsetsum method to know whether the subset sum with the half of this even number
is present, if yes then the remaining elements sum will give the same sum so return true else false
if the sum of elements in array is odd then there is no way to that elements can be equally divided 
12 -> 6+6 ---- 13 6.5 and 6.5(which is not possible)as all the numbers in array are numbers 
*/

function isArrayHasEqualSumSubset(arr){
    let arrSum = arr.reduce((tot,ele)=>tot+ele)
    return arrSum%2? false :1/* included 1 just to avoid error isSubsetPrestWithSum(arr,arrSum/2) */
}