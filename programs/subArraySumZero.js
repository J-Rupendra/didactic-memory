// given an array of number, find the subarray with sum zero

function hasSubarrayWithSumZero(arr){
    let sum = 0
    let storedSums = new Set()
    for(let i=0;i<arr.length;i++){
        sum+=arr[i]
        if(storedSums.has(sum) || sum===0){
            console.log("Yes we have sum zero")
            return
        }
        storedSums.add(sum)
    }
    console.log("can't find sum with zero")
}

hasSubarrayWithSumZero([4,2,-3,1,6])
hasSubarrayWithSumZero([-3,2,3,1,6])


/*
As the question suggests subarray which means the elements must be in side by side
in an array if there is a sum zero then obviously we will find the same sum value more than once while adding each number in a loop
if sum of 0 to i === sum of 0 to j then sum of elements between i and j is zero
we used set to store because we can check the sum in O(N)
if we need to print sub aray then we can use map to store the sum and he index, to finally get the elements causing sum zero
*/