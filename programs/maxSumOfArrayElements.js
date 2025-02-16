// Given an array of elements. find the max possible sum. you can exlude some elements to 

function findMaxSumOfArrayElements(arr){
    let currRes=arr[0]
    for(let i=1;i<arr.length;i++){
        currRes = Math.max(arr[i]+currRes, currRes, arr[i])
    }
    console.log(currRes)
}

findMaxSumOfArrayElements([-5,7,1,-4,0,-2])


// https://leetcode.com/problems/maximum-subarray/
function maxSubArraySum(arr){
    let currSum = 0, maxSum=-Infinity
    for(let i=0;i<arr.length;i++){
        currSum+=arr[i]
        maxSum=Math.max(currSum,maxSum)
        if(currSum<0){  // kadane's algoithm suggests to make currSum 0 if we find negative number as the subarray ends here
            currSum = 0
        }
    }
    console.log(maxSum)
}
maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])