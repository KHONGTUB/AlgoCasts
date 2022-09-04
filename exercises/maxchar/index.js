// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let num = 0;
  let max = "";
  for (const char of str) {
    obj[char] = obj[char] + 1 || 1;
  }

  for (const char in obj) {
    if (obj[char] > num) {
      num = obj[char];
      max = char;
    }
  }
  return max;
}

maxChar("abcccccccd");

module.exports = maxChar;
