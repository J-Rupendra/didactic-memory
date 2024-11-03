// given array should be ascending order

const searchArray = (arr, num) => {

    const binarySearch = (left, right) => {
        if(left > right){
            return -1
        }
        const mid = Math.floor( (left+right)/2 )
        if(arr[mid] === num){
            return mid
        } else if(num < arr[mid]){
            return binarySearch(left, mid-1)
        } else {
            return binarySearch(mid+1, right)
        }
    }

    return binarySearch(0, arr.length-1)

}

console.log(`The target element is found at index ${searchArray([-1,0,3,5,9,12],-1)}`)