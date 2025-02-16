function pow(n, x){
    if(x===1){
        return n
    }
    return x%2===0?pow(n*n, x/2):pow(n*n,(x-1)/2)*n
}
console.log(pow(3,3));

// we are reducing the multiplication by 2 everytime so the time complexity of the problem will be logN
// a^n = (a^2)^n/2


function powerOf(num,exponent){
    if(exponent===1)
    return num;
    return num*powerOf(num,exponent-1)
}
console.log(powerOf(4,10));