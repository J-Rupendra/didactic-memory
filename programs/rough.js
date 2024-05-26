function findPivotIndex(arr){
    pIndex=1;
    for(let i=pIndex;i<arr.length;i++){
        if(arr[0]>arr[i]){
            [arr[pIndex],arr[i]]=[arr[i],arr[pIndex]]
            pIndex++;
            console.log(arr);
        }
    }
    return pIndex;
}

console.log(findPivotIndex([28,29,1,4,5,7,6]));