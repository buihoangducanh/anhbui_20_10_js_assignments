// Find Missing Number:
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one number missing from the array.

function findMissingNumber(a) {
  for (let i = 0; i < a.length ; i++) {
    if (a[i] !== i) return i;
  }
  return null;
}
console.log(findMissingNumber([0, 1, 2, 3, 5]));
