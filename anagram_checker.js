// Anagram Checker:
// Write a function that checks if two given words are anagrams.

function anagramChecker(str1, str2) {
  return str1 === str2.split("").reverse().join("");
}

console.log(anagramChecker("abc", "cba"));
