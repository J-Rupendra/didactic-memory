//Given an array arr[] of integers and a number x, the task is to find the smallest subarray with a sum greater than the given value. 

function smallestSubarrayLengthWithGreateSum(arr, x){
    let sum=0, start=0, end=0, minLen = arr.length
    while(sum<=x && end<arr.length){
        sum+=arr[end++]
    }
    if(end===arr.length){
        if(sum>x){
            console.log(arr.length)
        } else {
            console.log("can't find")
        }
    } else {
        minLen = Math.min(end-start,minLen)
        let subArrayLen = new Map()
        end--
        while(end<arr.length && start<=end){
            if(sum>x){
                minLen = Math.min(end-start+1,minLen)
                subArrayLen.set(end-start+1,[start,end])
                sum-=arr[start++]
            } else {
                end++
            }
        }
        console.log(minLen,subArrayLen)
    }
}

smallestSubarrayLengthWithGreateSum([1, 11, 100, 1, 0, 200, 3, 2, 1, 250],280)

// take two pointers and iterate the second pointer until it reaches the element where the sum of elements are greater than the expected value
// store that length 
// increment the start pointer if sum is greater and end pointer if sum is less.
// subarrlen is a variable we are storing to get the subarry