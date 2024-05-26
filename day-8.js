
// 557. Reverse Words in a String III

// Given a string s, reverse the order of characters in each word within a sentence 
// while still preserving whitespace and initial word order.

 

var reverseWords = function(s) {
    return s.split(' ').map(m=>m.split('').reverse().join('')).join(' ')





}
s = "Let's take LeetCode contest"
console.log(reverseWords (s)) //output:-s'teL,ekat,edoCteeL,tsetnoc