// Given an array of elements. find the max possible sum. you can exlude some elements to 

function findMaxSumOfArrayElements(arr){
    let currRes=0
    for(let i=0;i<arr.length;i++){
        currRes = Math.max(arr[i]+currRes, currRes)
    }
    console.log(currRes)
}

findMaxSumOfArrayElements([-5,7,-1,-0,4,-2])

// The above approach will fail if all the elements in array are negative.