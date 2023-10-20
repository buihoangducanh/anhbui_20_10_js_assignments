// Merge Sorted Arrays:
// Given two sorted arrays, write a function that merges them into one sorted array.

function mergeTwoSortedArray(arr1, arr2) {
  let i = 0;
  let j = 0;

  const finalArr = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    } else {
      finalArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    finalArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    finalArr.push(arr2[j]);
    j++;
  }
  return finalArr;
}

console.log(mergeTwoSortedArray([1,3,4],[2,5]))
