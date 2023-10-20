// Find the Largest Number:
// Write a function that returns the largest number in an array.

function largetNum(arr) {
  if (arr.length === 0) return undefined;

  let max = Number.MIN_VALUE;
  for (const num of arr) {
    if (max < num) max = num;
  }
  return max;
}

//test
console.log(largetNum([]));
console.log(largetNum([-1, 1, 2, 3, 4, 15]));
