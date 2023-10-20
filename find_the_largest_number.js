// Find the Largest Number:
// Write a function that returns the largest number in an array.

function largestNum(arr) {
  if (arr.length === 0) return undefined;

  let max = Number.MIN_VALUE;
  for (const num of arr) {
    if (max < num) max = num;
  }
  return max;
}

//test
console.log(largestNum([]));
console.log(largestNum([-1, 1, 2, 3, 4, 15]));
