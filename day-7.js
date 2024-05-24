// 434. Number of Segments in a String

// Given a string s, return the number of segments in the string.

// A segment is defined to be a contiguous sequence of non-space characters.




var countSegments = function(s) {
    let splits=s.split(" ").filter(Split=>Split !=="")
    return splits.length
    
};
let s = "Hello, my name is John"
console.log(countSegments(s))