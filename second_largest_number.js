// Find the Second Largest Number:
// Write a function that returns the second largest number in an array.

function findSecondLargestNumber(arr) {
  let maxVal = Number.MIN_VALUE;
  for (let val of arr) {
    if (val > maxVal) {
      maxVal = val;
    }
  }
  let secondMaxVal = Number.MIN_VALUE;
  for (let val of arr) {
    if (val > secondMaxVal && val !== maxVal) {
      secondMaxVal = val;
    }
  }
  return secondMaxVal === Number.MIN_VALUE
    ? `Largest element of the array is ${maxVal} there is no second largest element`
    : `The largest element of the array is ${maxVal} and the second largest element is ${secondMaxVal}`;
}

console.log(findSecondLargestNumber([1, 2, 3, 4, 1, 1, 2, 2]));
