/*
PROBLEM
- Write a recursive function that computes the nth Fib number where
  nth is an argument passed to the function

EXAMPLES
- 1: 1 (1 is the first Fib number)
- 2: 1 (2 is the second Fib number)
- 3: 2 (2 is the third Fib number, because 1 + 1 = 2)
- 4: 3 (and so on...)

DATA
- Should I use an array to contain all of the fib numbers?

ALGORITHM
- 
*/

function fibonacci(number) {
  if (number < 3) {
    return 1;
  } else {
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
