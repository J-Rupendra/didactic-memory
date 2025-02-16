//usign recursion
function recFactorial(num){
    if(num===1){
        return 1
    }
    return recFactorial(num-1)*num
}




// using loop
function factorial(num){
    fact=1;
    for(let i=2;i<=num;i++){
        fact*=i
    }
    return fact;
}
console.log(factorial(5));
console.log(recFactorial(5));