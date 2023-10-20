// Flatten Array:
// Write a function that takes a nested array and flattens it into a single array.

function flattenArray(arr) {
  let myArray = [];
  for (let i = 0; i < arr.length; i++) {
    myArray = [...myArray, ...arr[i]];
  }
  return myArray;
}
console.log(
  flattenArray([
    [1, 2, 3, 4, 5],
    [23, 41],
  ])
);
