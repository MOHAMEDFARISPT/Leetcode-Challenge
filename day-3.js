
// 345. Reverse Vowels of a String


// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.





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