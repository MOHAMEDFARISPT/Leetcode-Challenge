// 268. Missing Number


// Given an array nums containing n distinct numbers in the range [0, n],
//  return the only number in the range that is missing from the array.

let nums=[1,0,3]

var missingNumber = function(nums) {

    let n=nums.length;
    let expect=n*(n+1)/2
    let actual=nums.reduce((acc,total)=>acc+total,0)
    return expect-actual

}

console.log(missingNumber(nums))  //output=2