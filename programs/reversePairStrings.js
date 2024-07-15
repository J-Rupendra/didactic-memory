// Given a string with lower case english letters and pair of brackets, reverse the string inside paranthesis
// it always has balanced paranthesis
// Input: s = "(ed(et(oc))el)"
// Output: "leetcode"

const reverseParentheses = function (s) {
    let ind = 0
    function helper() {
        let subStr = ""
        while (ind < s.length) {
            if (s[ind] === "(") {
                ind++
                subStr+= helper()
            } else if (s[ind] === ")") {
                ind++
                return subStr.split("").reverse().join("")
            } else {
                subStr+= s[ind++]
            }
        }
        return subStr
    }
    return helper()
}

console.log(reverseParentheses("(u(love)i)"))