
// 1408. String Matching in an Array

// Given an array of string words, return all strings in words that is a substring of another word. You can return the answer in any order.

// A substring is a contiguous sequence of characters within a string



words = ["mass","as","hero","superhero"]

var stringMatching = function(words) {

let result=[]

 for(let i=0;i<words.length;i++){
    for(let j=0;j<words.length;j++){
        if(i!==j && words[j].includes(words[i])){
            result.push(words[i])
        }
    }
 }
 return result

}

console.log(stringMatching(words))   //output [ 'as', 'hero' ]
