// Prime Number Checker:
// Write a function that checks if a number is prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num === 2) return true;
    else if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(4));
console.log(isPrime(3));
console.log(isPrime(11));
console.log(isPrime(9));
