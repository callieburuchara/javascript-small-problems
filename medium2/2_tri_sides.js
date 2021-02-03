/*
PROBLEM
- input: three numbers
- output: equilateral, isosceles, scalene, or invalid

EXAMPLES
- valid: sum of 2 shorter sides must be greater than the long side
        - every side must be greater than 0

DATA
- Numbers
- Strings

ALGORITHM
- accept three numbers as arguments
- organize them from least the greatest
- return invalid unless
  - [0] + [1] > [2]
  - all are greater than 0

- if all three added together / length = [0], return equilateral
- if two are the same but one is different, return isosceles
- if all are different, return scalene

*/

function triangle(...numbers) {
  if (!validTri(numbers)) return "invalid"
  
  let uniqueNums = [...new Set(numbers)].length
  
  if (uniqueNums === 1) return 'equilateral';
  if (uniqueNums === 2) return 'isosceles';
  return 'scalene';

}

function validTri(numbers) {
  numbers.sort((a, b) => a - b);

  return (numbers.length === 3) &&
    (numbers[0] + numbers[1] > numbers[2]) &&
    (numbers.every(num => num > 0));
}

console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
