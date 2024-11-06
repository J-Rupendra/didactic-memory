// you are given a 0-indexed array of positive integers nums

// In one operation, you can swap any two adjacent elements if they have the same number of set bits.
// you are allowed to do this operation any number of times(including zero)

// Return true if you can sort the array, else return false.
// https://leetcode.com/problems/find-if-array-can-be-sorted/description/

const canArrayBeSorted = (nums) => {
    let prevMax = 0, currMax = nums[0], currMin = nums[0]
    let prevSetBitsCount = countSetBits(nums[0])
    for(let i=1;i<nums.length;i++){
        const currSetBitsCount = countSetBits(nums[i])
        if(prevSetBitsCount === currSetBitsCount){
            currMax = Math.max(currMax, nums[i])
            currMin = Math.min(currMin, nums[i])
        } else {
            if(currMin < prevMax){
                return false
            }
            prevMax = currMax
            currMax = currMin = nums[i]
            prevSetBitsCount = currSetBitsCount
        }
    }
    
    return currMin>=prevMax
}


const countSetBits = (num) => {
    let count = 0
    while(num>0){
        // if we do & with its previous number then the least significant bit will be removed
        // so we can achieve number of bits by O(log n) time complexity
        num = num & num-1   // here the arithmetic operation is precendence by logical operator
        count++
    }
    return count
}

const testData1 = [3, 16, 8, 4, 2]
const testData2 = [8, 4, 2, 30, 15]
console.log(canArrayBeSorted(testData1))


/*

we have divided the array into segments, each segment/group has same number of set bits
loop through the segment and find its max element and loop through the second segment and find its min element
the second segment min element must be greater than first segment max element then only we can sort the array
because we can't interchange the number from different segments as their set bits are different.
so when we enter into third segment we can do this comparison and conclude the condition.
O(n+nlogn) for single iteration and finding set bits for every element


we can do this in O(n2) by using bubble sort. As bubble sort works on swapping the adjacent elements
we can return false at the place where we need to swap the elements but we cannot due to set bits count mismatch


*/