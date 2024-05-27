// Given a string s, find the length of the longest substring without repeating characters.


var lengthOfLongestSubstring = function(s) {
    if(s.length===1){
        console.log(1) // single character is always non repetive
        return
    }
    let charArr = new Array(256).fill(0)
        let start=0, end=0,maxLen=0
        while(end<s.length){
            charArr[s.charCodeAt(end)]++
            if(charArr[s.charCodeAt(end)]>1){
                maxLen = Math.max(maxLen, end-start)
                while(charArr[s.charCodeAt(end)]>1){
                    charArr[s.charCodeAt(start++)]--
                }
            }
            end++
        }
        maxLen = Math.max(maxLen, end-start) //what if our string doesn't have any repetitive characters
        console.log(maxLen)
};

lengthOfLongestSubstring("abcabcbb")
// lengthOfLongestSubstring("abc")
// lengthOfLongestSubstring(" ")

/*
take a character array of 256(ASCII max characters) to avoid any other symbols and create a window until you find the uniquue characters
start incrementing the start pointer if there are any duplicate character and finally check for length.
*/