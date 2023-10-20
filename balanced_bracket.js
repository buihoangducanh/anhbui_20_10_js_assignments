// Balanced Brackets:
// Write a function that checks if the brackets in a given string are balanced.
function isBalanced(str) {
  const stack = [];
  const openingBrackets = ["[", "(", "{"];
  const closingBrackets = ["]", ")", "}"];

  let before = 0;
  let after = str.length - 1;

  while (before <= after) {
    if (
      openingBrackets.includes(str[before]) &&
      closingBrackets.includes(str[after])
    ) {
      if (
        openingBrackets.indexOf(str[before]) ===
        closingBrackets.indexOf(str[after])
      ) {
        before++;
        after--;
      } else return false;
    }
    if (!openingBrackets.includes(str[before])) {
      before++;
    }
    if (!closingBrackets.includes(str[after])) {
      after--;
    }
  }

  return true;
}

console.log(isBalanced("{[()]}")); // true
console.log(isBalanced("{[(45)}]45}")); // true
