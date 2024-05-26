//function return sum of n numbers

//solution 1
function sumN1(n){
    let total=0
    for(let i=1;i<=n;i++){
        total+=i
    }
    return total
}

function sumN2(n){
    return (n*(n+1))/2;
}

console.log(sumN1(100))
sumN2(100)  //both will result in different time complexity
