let arr = [4,12,5,3,12,5,3,1,2,4,6]
function nextGreaterFromRight(){
  let res = []
  let stack = []
  for(let i=arr.length-1;i>=0;i--){
    while(stack.length && stack[stack.length-1]<arr[i]){
      stack.pop()
    }
    if(stack.length === 0){
      res.push(-1)
    } else {
      res.push(stack[stack.length-1])
    }
    stack.push(arr[i])
  }
  return res.reverse()
}

console.log(nextGreaterFromRight()) 

/*
Note: if we need to find the greater element from right them iterate from end of the array and vice versa for left greater element.
this is because if we find the greater element when iterating through left to right for right greater 
then once we cross current element of that highest element then we need to remove that element from stack 
but according to stack structure that highest element is on bottom and this is very time consuming.
so better to iterate from end if we need greater from right and vice versa for left greater
*/