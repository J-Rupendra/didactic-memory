//lenear search eg:indexOf in js
function lenearSearch(arr,val){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val)  return i;
    }
    return -1;
}
console.log(lenearSearch([1,2,5,3,4],6));


//Binary search. operates on sorted array
function binarySearch(sortedArray,val,start=0,end=sortedArray.length-1){
    let midInd=Math.floor((end+start)/2)
    // console.log(midInd,sortedArray,val,start,end);
    if(sortedArray[midInd]==val) return midInd;
    if(start>=end) return -1
    if(sortedArray[midInd]>val) return binarySearch(sortedArray,val,start,midInd-1)
    if(sortedArray[midInd]<val) return binarySearch(sortedArray,val,midInd+1,end)

}
console.log(binarySearch([5,6,7,8,9,10],1));

//string lenear search eg: includes in js
function isStringPresent(str1,str2){
    if(str1.length<str2.length) return false;
    let ind1=0
    for(let i=0;i<str1.length;i++){
        if(str1[i]==str2[ind1]){
            ind1++
        }
        else{
            ind1=0
        }
        if(ind1==str2.length){
            return true;
        }
    }
    return false;
}
console.log(isStringPresent("how are you","arey"));