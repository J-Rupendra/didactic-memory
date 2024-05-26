//string reverse
function strRev(str){
    if(str.length==1) return str;
    return strRev(str.slice(1))+str.slice(0,1)
}
console.log(strRev('helloh'));

//function accepts array and callback function,
//return true if atleast callback returns true
function someRecursion(arr,func){
    if(arr.length==0) return false;
    if(func(arr[0])) return true;
    else return someRecursion(arr.slice(1),func)
}
console.log(someRecursion([1,2,7,4,5],val=>val>5));


//ispalindrome
//checks first and last element equality, goes inside if true else return false
function isPalindrome(str){
    if(str.length==0 /*for even length */ || str.length==1 /*for even length */) return true;
    if(str[0]==str[str.length-1])  return isPalindrome(str.slice(1,-1));
    return false;
}
console.log(isPalindrome("abaaaaba"));


//nestedEvenSum
let obj = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: '6'},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
function nestedEvenSum(arg){
    let sum=0;
    function recFun(innerArg){
        for(let value of Object.values(innerArg)){
            if(typeof value=='object'){
                recFun(value)
            }
            else if(typeof value==='number' && value%2===0){
                sum+=value;
            }
        }
    }
    recFun(arg)
    return sum;
}

console.log(nestedEvenSum(obj));