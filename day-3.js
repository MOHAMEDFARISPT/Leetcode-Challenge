
// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.





let s = "Hello World"

var lengthOfLastWord = function(s) {
    s=s.trim()
    let word=s.split(' ').reverse
    return word
    let lastWord=word[word.length-1]
    return lastWord.length
  
  
  };

  console.log(lengthOfLastWord(s))   //5