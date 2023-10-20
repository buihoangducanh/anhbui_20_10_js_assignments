// Array Multiplication:
// Write a function that multiplies all numbers in an array together and returns the product.

function multiplicationOfArray(arr) {
  if (arr.length === 0) return undefined;
  return arr.reduce((total, elem) => total * elem, 1);
}

//test
console.log(multiplicationOfArray([]));

console.log(multiplicationOfArray([1, 2, 3, 4, 5]));
