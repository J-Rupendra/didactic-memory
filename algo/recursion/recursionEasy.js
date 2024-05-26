//power
function powerOf(num,exponent){
    if(exponent<=1)
    return num;
    return num*powerOf(num,exponent-1)
}
console.log(powerOf(4,10));


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