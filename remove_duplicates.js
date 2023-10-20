// Remove Duplicates:
// Write a function that removes duplicates from an array.

function removeDuplicates(arr) {
  let mySet = new Set(arr);

  return Array.from(mySet);
}

console.log(removeDuplicates([1, 2, 3, 4, 1, 1, 2, 2]));
