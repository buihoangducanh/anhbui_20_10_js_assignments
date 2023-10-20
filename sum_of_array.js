// Sum of Array:
// Write a function that takes an array of numbers and returns the sum of all numbers in the array.

function sumOfArray(arr) {
  if (arr.length === 0) return undefined;

  return arr.reduce((total, elem) => total + elem, 0);
}

//test
console.log(sumOfArray([]));
console.log(sumOfArray([1, 2, 3, 4, 5]));
