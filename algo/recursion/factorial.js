//usign recursion
function factorial(num){
    fact=1;
    for(let i=2;i<=num;i++){
        fact*=i
    }
    return fact;
}
console.log(factorial(5));