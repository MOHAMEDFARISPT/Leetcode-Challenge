
// 58. Length of Last Word

// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.





function reverseVowels(s) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let left = 0, right = s.length - 1;
  const chars = s.split('');
  console.log(chars)

  while (left < right) {
      console.log(vowels.has(chars[left]))
      if (vowels.has(chars[left]) && vowels.has(chars[right])) {
          [chars[left], chars[right]] = [chars[right], chars[left]];
          left++;
          right--;
      } else if (!vowels.has(chars[left])) {
          left++;
      } else {
          right--;
      }
  }

  return chars.join('');
}
s = "hello"

console.log(reverseVowels(s))