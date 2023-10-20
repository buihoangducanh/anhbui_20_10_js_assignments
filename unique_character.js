// Unique Characters:
// Create a function that checks if a string has all unique characters. Return true if all characters are unique, false otherwise.

function checkUniqueCharacters(string) {
  let arrayOfCharacters = string.split("");
  const setOfCharacters = new Set(arrayOfCharacters);

  for (const char of setOfCharacters) {
    if (string.indexOf(char) !== string.lastIndexOf(char)) {
      return false;
    }
  }
  return true;
}

console.log(checkUniqueCharacters("anhtaixautrai"));
console.log(checkUniqueCharacters("abcsx"));
