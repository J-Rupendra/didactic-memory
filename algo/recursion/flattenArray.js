
//program to flatten an array by providing deep
//flattens the array in the depth given as input
//second argument is optional, considers as Infinity
//java script has default flat function

let arr=[1,2,4,[2,2,[4,7],[[[7,8]]],[0],[]],10]

function flatten(arr,deep=Infinity){
    let flattenedArr=[]
    let depthCursor=0
    function recFun(innerArr,deep){
        let innerInd=0
        // console.log(ind,innerArr);
        while(innerInd<innerArr.length){
            if(Array.isArray(innerArr[innerInd]) && depthCursor<deep){
                depthCursor++
                // console.log(depthCursor,"1");
                    recFun(innerArr[innerInd],deep)
                
            }
            else{
                // console.log(depthCursor);
                if(depthCursor==deep){
                    depthCursor=0
                }
                flattenedArr.push(innerArr[innerInd])
                // console.log(flattenedArr);
            }
            innerInd++;
        }

    }
    recFun(arr,deep)
    console.log(depthCursor,deep);
    return flattenedArr;
}

console.log(flatten(arr,Infinity));