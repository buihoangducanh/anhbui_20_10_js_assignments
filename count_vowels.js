// Count Vowels:
// Create a function that counts and returns the number of vowels in a string.

function countVowels(str) {
  const arrOfString = str.split("");

  const vowels = ["e", "o", "a", "i", "u"];

  let count = 0;
  for (const char of arrOfString) {
    if (vowels.includes(char)) count++;
  }
  return count;
}

console.log(countVowels("anhyeuem"));
console.log(countVowels("klts"));
