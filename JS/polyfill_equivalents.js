//bind polyfill

// As we need to apply this method to all function types, we can include it in function prototype
Function.prototype.bindPolyfill = function(){
    let context = this // as we called this method using dot operator, this refers to that function
    let outerArgs = arguments
    return function(){
        let innerArgs = arguments //if suppose we get some more arguments from inner function then we can catch and concat them
        // let totalArgs = [...outerArgs.slice(1), ...innerArgs] ---this can be used instead of second argument in apply method
        context.apply(outerArgs[0],outerArgs.slice(1))
    }
}

function greet(name){
    console.log(`Welcome to ${this.org}, ${name}`)
}
let obj={
    org:"veltech"
}

let bindedFunction = greet.bindPolyfill(obj,'rupendra')  //we can call this method which returns a modified function with custod this context

// similarly we can create polyfill for call, apply also