function maxSumOfSubarray(arr,k){
  let sum=0, pointer=0
  while(pointer<k){
    sum+=arr[pointer++]
  }
  let max=sum
  while(pointer<arr.length){
    sum=sum+arr[pointer]-arr[pointer-k]
    max = Math.max(sum, max)
    pointer++
  }
  console.log(max)
}

maxSumOfSubarray([1, 4, 2, 10, 2, 3, 1, 0, 20],4)