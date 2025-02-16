//factorial
function factorial(num){
    if(num<=1) return 1;
    return num*factorial(num-1)
}
console.log(factorial(4));

//product of array
function productOfArray(arr){
    if(arr.length==0) return 1;
    return arr[0]*productOfArray(arr.slice(1))
}
console.log(productOfArray([1,10,3,4]));

//fibanocci number i=of nth place
function fibanocci(num){
    if(num<=0) return 0;  //added simply
    if(num==1 || num==2) return 1;
    return fibanocci(num-1) + fibanocci(num-2);
}
console.log(fibanocci(5));

function isSortedAsc(arr, ind){
    if(ind===arr.length-1){
        return true
    }
    if(arr[ind]>arr[ind+1]){
        return false
    }
    return isSortedAsc(arr,ind+1)
}
console.log(isSortedAsc([1,2,3,4,5,6,7],0))

function binarySearch(arr, target){
    if(arr.length === 0){
        return false
    }
    const mid = Math.floor(arr.length/2)
    if(arr[mid] === target){
        return true
    } else if(arr[mid] < target){
        return binarySearch(arr.slice(mid+1), target)
    } else {
        return binarySearch(arr.slice(0,mid), target)
    }
}
console.log(binarySearch([1,2,3,4,5,6,7],1))

function findMinIndexInRotatedSortedArray(arr, low, high){
    if(low>=high){
        return low
    }
    const mid = Math.floor((low+high)/2)
    if(arr[mid]>arr[high]){
        return findMinIndexInRotatedSortedArray(arr, mid+1, high)
    } else {
        return findMinIndexInRotatedSortedArray(arr, low, mid)
    }
}
// when the mid element is greater than the last element that means we have the right sub array as sorted from some index greater than mid
// so next time we can search in subarray mid+1 to last
// if the above condition is false that means including mid element to rightmost is sorted. so that confirms we will not have lowest element right side
// so we need to search elements between low till mid - because mid also is less than high so it could be also a possible min in case if
// the sorted array starts from mid
console.log(findMinIndexInRotatedSortedArray([6,7,8,1,2,4,4,5,6],0,8));
