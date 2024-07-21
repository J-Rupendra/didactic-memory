/*
trie is used to search the word in a dictionary of words
it is not a binary tree instead it is a k-array tree as contains more than 2 child
if we are storing small alphabets then each node in a tree will has maximum of 26 children
*/

class Node{
    constructor(){
        this.children = new Map()  // we used hash map to make the search operation O(1).
                                    // instead we can use array also with charcode as index and fill with null, so we don't need to store character
        this.endOfWord = false  // to represent the current node is end of word
    }
}

class Trie{

    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root; // should use semicolon as we are starting the next line with () - if not js compiler will think it as a function
        ([...word]).forEach((letter, index)=>{  // as string doesn't has forEach we converted string into array. we can use normal loop also
            if(!curr.children.has(letter)){
                curr.children.set(letter,new Node())
            }
            if(index === word.length-1){
                curr.children.get(letter).endOfWord = true
            } else {
                curr = curr.children.get(letter)
            }
        })
        // we are iterating through word and creating a node only if there is no continution of characters
        // if there is a character alredy then we can simply pass to it's children if it not last character
    }

    search(word){
        let curr = this.root
        for(let i=0;i<word.length;i++){
            if(!curr.children.has(word[i])){
                return false
            }
            if(i===word.length-1){
                return curr.children.get(word[i]).endOfWord
            }
            curr = curr.children.get(word[i])
        }
        // if the current node has the children with letter then we can move to next level
        // if there is no children with letter then search is complete with failed status
        // we are checking whether the last character in searching word is also last character for some string stored in trie
    }

    canWordBreak(word){
        if(word.length === 0){
            return true
        }
        for(let i=1; i<=word.length;i++){
            const firstPart = word.substring(0,i)
            const secondPart = word.substring(i)
            if(this.search(firstPart) && this.canWordBreak(secondPart)){
                return true
            }
        }
        return false
        // we are breaking the given word into two parts - if the first part is present in dictionary which means we can add 
        // break at first part, now check the second part, if second part gives true then the word can be broken into words
        // in recursion if the for loop is completed and we didn't find anything then the breakpoint is wrong so we return false
        // ex: canbetter -> [canbet] [ter] should give false as the break is not correct, [can] [better] should give true
    }

    startsWith(prefix){
        let curr = this.root
        for(let i=0;i<prefix.length;i++){
            if(!curr.children.has(prefix[i])){
                return false
            }
            curr = curr.children.get(prefix[i])
        }
        return true
    }

}

const customDictionary = new Trie()
const words = [ "bet", "better", "betting", "calling", "can" ]
words.forEach((word)=>{
    customDictionary.insert(word)
})

console.log(customDictionary.search("bet"))
console.log(customDictionary.canWordBreak("callingbetter")) // whether giver word can be broken into any list of words in our dictionary
console.log(customDictionary.startsWith("cane"))

// given a string(ababa), find the count of unique substrings from that word
/*
we can acheive this by counting possible prefixes of (possible suffixes of string) or vice-versa
and take the unique elements from this
lets consider the first case as the trie data structure can handle prefix finding and also it stores the given strings uniquely in the tree structure
find the possible suffixes from a string using for loop
create a trie with all the suffix strings
count of the trie nodes is equal to the count of unique prefixes. as each path from root will form a unique prefix. draw diagram to understand
count the root also because the empty string or null string is also a substring
*/
function uniqueSubstringCount(mainString){
    const obj = new Trie()
    for(let i=0;i<mainString.length;i++){  //ignoring the empty string
        obj.insert(mainString.slice(i,mainString.length))
    }
    return countNodes(obj.root)+1
}

function countNodes(currentNode){
    let count=currentNode.children.size
    for(let [key, value] of currentNode.children){
        count+=countNodes(value)
    }
    return count
}

console.log(uniqueSubstringCount("ababa"))


/*
given an array of words and return a longest word with all prefixes in the array
This problem is with prefixes and we need to check the array which has all the possible prefixes for a string
trie is the best solution with prefixes and its verification
*/

function longestWordWIthPrefixes(words){
    const tempTrieObj = new Trie()
    for(let word of words){
        tempTrieObj.insert(word)
    }
    return findTheEligibleString(tempTrieObj.root,"")
    
}
let res = ""

function findTheEligibleString(currentNode,tempStr){
    for(let [key, value] of currentNode.children){
        if(value.endOfWord){
            tempStr+=key
            if(tempStr.length>res.length){
                res = tempStr
            }
            findTheEligibleString(value,tempStr)
            tempStr = tempStr.slice(0,tempStr.length-1)
        }
    }
    
}
longestWordWIthPrefixes(["a","banana","ap","app","appl","apply","apple"])
console.log(res)
