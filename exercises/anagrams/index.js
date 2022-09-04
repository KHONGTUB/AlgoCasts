// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let clearedA = stringA.replace(/\W/g, "").toLowerCase();
  let clearedB = stringB.replace(/\W/g, "").toLowerCase();

  if (clearedA.length != clearedB.length) {
    return false;
  }

  const objA = {};
  const objB = {};

  for (const char of clearedA) {
    objA[char] = objA[char] + 1 || 1;
  }

  for (const char of clearedB) {
    objB[char] = objB[char] + 1 || 1;
  }

  for (const key in objA) {
    if (objA[key] != objB[key]) {
      return false;
    }
  }
  return true;
}

anagrams("One one", "One one c");
// anagrams("Hi there", "Bye there");

module.exports = anagrams;
