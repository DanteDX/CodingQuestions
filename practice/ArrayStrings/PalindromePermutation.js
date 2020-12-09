/* for a palindrome string permutation, if string.length is even,
all character counts must be even, and if string.length is odd, then 
all character countes must be even && there must be only one unique character */

// suppose all the characters of lower case and no whitespace
const PalindromePermute = (str) => {
  let oddFlag = false;
  if (str.length % 2 !== 0) {
    oddFlag = true;
  }
  let charMap = {};
  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  if (oddFlag === false) {
    for (let unique in charMap) {
      if (charMap[unique] % 2 !== 0) {
        return false;
      }
    }
    return true;
  } else if (oddFlag === true) {
    let foundOdd = false;
    for (let unique in charMap) {
      if (charMap[unique] % 2 !== 0) {
        if (foundOdd !== false) {
          foundOdd = true;
        } else if (foundOdd === true) {
          return false;
        }
      }
    }
    return true;
  }
};
