// Given array and target sum. You can add -/+ before each integer to form a subset to get the sum. find the number of ways we can get the sum with this condition



var findTargetSumWays = function(nums, target) {
    let total = nums.reduce((acc, ele)=>acc+ele)
    let s1 = (total+target)/2
    let matrix = [...new Array(nums.length+1)].map(_=>[...new Array(s1+1)])
    for(let i=0;i<matrix[0].length;i++){
        matrix[0][i] = 0
    }
    for(let i=0;i<matrix.length;i++){
        matrix[i][0] = 1
    }
    for(let i=1;i<matrix.length;i++){
        for(let j=1;j<matrix[0].length;j++){
            if(j<nums[i-1]){
                matrix[i][j] = matrix[i-1][j]
            } else {
                matrix[i][j] = matrix[i-1][j]+matrix[i-1][j-nums[i-1]]
            }
        }
    }
    console.log(matrix[nums.length][s1])
}

findTargetSumWays([1,1,1,1,1],3)

/* 

s1-s2=TS
s1+s2=Sum
s1=TS+sum/2

find the possible subsets to get s1

*/