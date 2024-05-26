//frequency count stratergy used in the find frequency problems

function isValidAnagram(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
let frequencyCounter1={}
for(let val of str1.split('')){
    frequencyCounter1[val]=(frequencyCounter1[val] || 0)+1
}
console.log(frequencyCounter1);
for(let val of str2.split('')){
    if(frequencyCounter1[val]){ //available and >0
        frequencyCounter1[val]--;
    }
    else{
        return false;
    }
}
return true;
}

console.log(isValidAnagram("azz",'zaa'));
