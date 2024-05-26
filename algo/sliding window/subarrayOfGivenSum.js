// Given an array arr[] of non-negative integers and an integer x, find a subarray that adds to a given x.

// nothing special in using arrow function syntax
findSubarrayOfGivenSum = (arr, x) => {
    let tempSum = 0, start=0, end =0
    while(end<arr.length && start<=end){
        if(tempSum===x){
            console.log(`Adding elements between ${start} and ${end-1} indices give the desired sum`)
            return
        } else if(tempSum<x){
            tempSum+=arr[end++]
        } else {
            tempSum-=arr[start++]
        }
    }
    console.log("can't find sum")
}

findSubarrayOfGivenSum([1, 4, 20, 3, 10, 5],33)

// add the elements until we reach equal or greater than value,
// if the sum is greater than expected then increment start pointer else increment the end pointer