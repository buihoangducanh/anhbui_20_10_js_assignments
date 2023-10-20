// Reverse Integer:
// Write a function that reverses an integer. E.g., 12345 becomes 54321.

function reverseInterger(num){
    return Number(num.toString().split('').reverse().join(''))
}

console.log(reverseInterger(12345))