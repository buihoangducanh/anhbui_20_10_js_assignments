// String Capitalization:
// Write a function that takes a string and returns it with the first letter of every word capitalized.

function capitalizeFirstLetter(word) {
  let arr = word.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

function stringCapitalization(myString) {
  let myArrayOfStrings = myString.split(" ");
  for (let i = 0; i < myArrayOfStrings.length; i++) {
    myArrayOfStrings[i] = capitalizeFirstLetter(myArrayOfStrings[i]);
  }
  return myArrayOfStrings.join(" ");
}
console.log(stringCapitalization("anh yeu em"));
