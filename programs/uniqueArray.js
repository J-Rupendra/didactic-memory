// multiple pointer stratergy used in finding uniques in array or sumzero,
// pointers placed in any position

function uniqueArray(arr){
    let left=0,right=1
    let resultArr=[arr[0]];
    for(let i=1;i<arr.length;i++){
        if(arr[left]!==arr[right]){
            resultArr.push(arr[right])
            left=right;
            
        }
        right++;
    }
    return resultArr;
}

console.log(uniqueArray([1,1,1,3,3,4,5,6,6,6,6,7]));