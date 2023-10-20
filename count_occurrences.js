// Count Occurrences:
// Write a function that counts the occurrences of a value in an array.

function countOccurrences(arr) {
  const myObj = {};
  for (let elem of arr) {
    myObj[elem] = myObj[elem] ? myObj[elem] + 1 : 1;
  }
  return myObj;
}


console.log(countOccurrences([1,2,3,4,1]))