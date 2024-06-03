
function fetchDetails(){
    console.log("api called");
}

//timer will reset for every call untill this method reaches any call for mentioned delay
function AddDebouncing(fn, delay){
    let timeout;
    return function(){
        // we can capture arguments here if we call modifiedFetchDetails function with any extra arguments
        clearTimeout(timeout)
        timeout=setTimeout(()=>{
            fn()
        }, delay)
    }
}

//timer will get started at the first call and then it will not call the inner function till the mentioned delay is over.
function addThrottling(fn, delay){
    let unLocked = true
    return function(){
        if(unLocked){
            fn()
            unLocked=false
            setTimeout(()=>{
                unLocked=true
            },delay)
        }
    }
}

let modifiedFetchDetails = AddDebouncing(fetchDetails,500)


