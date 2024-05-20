// 1684. Count the Number of Consistent Strings

// You are given a string allowed consisting of distinct characters 
// and an array of strings words. A string is consistent if all characters 
// in the string appear in the string allowed.

// Return the number of consistent strings in the array words.


var countConsistentStrings = function(allowed, words) {
    let allowedSet=new Set(allowed)
    let counts=0

    for(let word of words){
        let consistence=true;
        for(let char of word){
            if(!allowedSet.has(char)){
                consistence=false
                break;
            }
        }
        if(consistence){
            counts++
        }
    }
    return counts
}
let allowed='ab'
let words = ["ad","bd","aaab","baa","badab"]
console.log(countConsistentStrings(allowed,words))  // Output=2
