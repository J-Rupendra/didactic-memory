// Given an array of height, imagine a 2D plane water tank and find the max area of water can be filled in the formed container
// https://leetcode.com/problems/container-with-most-water/description/

/*
brute force

const findMaxArea = function(height) {
    let maxArea = 0
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            const w = j-i;
            const h = Math.min(height[i],height[j])
            maxArea = Math.max(maxArea, w*h)
        }
    }
    return maxArea
}
*/

const findMaxArea = (height) => {
    let maxArea = 0
    let left = 0, right = height.length-1
    while(left < right){
        const w = right - left
        const h = Math.min(height[left], height[right])
        maxArea = Math.max(maxArea, w*h)
        if(height[left]< height[right]){
            left++
        } else if(height[left]>height[right]){
            right--
        } else {
            left++
            right--
        }
    }
    return maxArea
}

findMaxArea([1,8,6,2,5,4,8,3,7])