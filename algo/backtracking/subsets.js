// print subsets

function printSubsets(arr, ans, index){
    if(index === arr.length){
        console.log(ans.join(""));
        return
    }
    ans.push(arr[index])
    printSubsets(arr, ans, index+1)
    ans.pop()
    printSubsets(arr, ans, index+1)
}

printSubsets([1,2,3], [], 0)

// in every level we have a choice of including or excluding the current index element to the already created subarray/answer
// the second recursion call is a backtracking call, so while backtracking we are poping out the element to make the choice of not including
// to the given n length set, we get 2^n subsets.
//  Time complexity = (2^n) * n => as in recursion to get every subset we need to traverse through all the elements decisions till leaf


// print subsets but the given input has duplicate elements in it. don't print the duplicate subsets

function printUniqueSubsets(arr, ans, index){
    if(index === arr.length){
        console.log(ans.join(""));
        return
    }
    ans.push(arr[index])
    printUniqueSubsets(arr, ans, index+1)

    let ignoreIndex = index+1
    while(ignoreIndex<arr.length && arr[ignoreIndex]===arr[index]){
        ignoreIndex++
    }

    ans.pop()                                   //backtracking step
    printUniqueSubsets(arr, ans, ignoreIndex)   // backtracking step
}

printUniqueSubsets([1,2,2,3,2].toSorted(),[],0)
// when we choose to remove the element we need to check whether the next available element is duplicate of current element
// should not utilise that index at all if that particular index has a duplicate value. so iterate till we fine unique values
// in case we don't exclude duplicate value then in some stage of recursion we will get the duplicate.
// to eliminate duplicate in single iteration we need all the duplicated elements in a row, so we choose to make the array sorted

// we can also find the all possible subsets and find the unique subsets from it as a solution but that has more time complexity
// instead we can skip the step of calculating the subset at the first place for duplicates