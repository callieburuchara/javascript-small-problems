/*
PROBLEM
- input: integer
- output: integer

- find the sum of the first [input] positive integers
- then square that sum
^ squaredSum

- then take those same first [input] positive integers
- square each of them
- then sum them together
^ sumSquares

return squaredSum - sumSquares

EXAMPLE
- 3: [1, 2, 3]
- 10: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
- 1: [1]

DATA
- Numbers
- Arrays maybe?

ALGORITHM
- accept an integer as argument
- use a for loop to create the full range of numbers
- use reduce ** 2 to get the squaredSum
- use a for loop to get the sumSquares
- return the result of the subtraction
*/

function sumSquareDifference(num) {
  let allNums = [];

  for (let n = 1; n <= num; n += 1) {
    allNums.push(n);
  }

  let squaredSum = allNums.reduce((a, n) => a + n) ** 2;
  let sumSquares = allNums.map(num => num ** 2)
                          .reduce((a, n) => a + n);

  return squaredSum - sumSquares;
}

// ANOTHER APPROACH

function sumSquareDifference(n) {
  let sum = 0;
  let sumOfSquares = 0;

  for (let i = 1; i <= n; i += 1) {
    sum += 1;
    sumOfSquares += i ** 2;
  }

  return sum ** 2 - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
