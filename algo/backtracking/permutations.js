
function printPermutations(ans, choices){
    if(choices.length===0){
        console.log(ans.join(""));
        return
    }
    for(let i=0;i<choices.length;i++){
        ans.push(choices[i])
        const newChoices = [...choices.slice(0,i), ...choices.slice(i+1)]
        printPermutations(ans,newChoices)
        ans.pop()
    }
}

printPermutations([],[1])

function printPermutationsWithNoExrtaSpace(choices, indexToSwap){
    if(indexToSwap === choices.length-1){
        console.log(choices.join(""));
        return
    }
    for(let i=indexToSwap;i<choices.length;i++){
        [choices[i],choices[indexToSwap]] = [choices[indexToSwap],choices[i]]
        printPermutationsWithNoExrtaSpace(choices,indexToSwap+1)
        if(i!=indexToSwap) // added this because if index is same then the compiler is not able to find the i`
        [choices[i],choices[indexToSwap]] = [choices[indexToSwap],choices[i]] // backtracking step
    }
}
printPermutationsWithNoExrtaSpace([1],0)

// at a level we can choose an element from the choices and remove that from the choice after that level.
// for given n length of input we get n! number of possible permutations
// time complexity = O(n*n!) => to output each possible permutation we need to visit all the fiven elements - n
// 