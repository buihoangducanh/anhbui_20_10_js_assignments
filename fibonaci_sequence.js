// Fibonacci Sequence:
// Create a function that returns the nth number in the Fibonacci sequence.

function fibo(n) {
  if (n == 1 || n == 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

console.log(fibo(2));
