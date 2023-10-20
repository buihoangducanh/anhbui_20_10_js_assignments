// Array Chunking:
// Write a function that splits an array into chunks of a specified size.

function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

// Example usage:
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = chunkArray(myArray, 3);
console.log(chunkedArray);
