/*
PROBLEM
- featured number: odd number, multiple of 7, all unique digits
- input: integer
- output: next featured number greater than the input
- return an error message if there is no next featured number
- largest possible is 9876543201

EXAMPLES
- All input will be valid it seems
- Added an edge case

DATA
- convert to a String then array then set to make sure they're unique
- Numbers
- Strings

ALGORITHM
- Helper method: validFeatured
  - the number is odd
  - the number is a multiple of 7
  - the number has all unique digits
- add 1 to the input until it's a featured number
- then return it
*/

function featured(number) {
  if (number >= 9876543201) return "Invalid request.";

  number = number += 1;

  while (!validFeatured(number)) {
    number += 1;
  }

  return number;
}

function validFeatured(num) {
  return (num % 2 !== 0) &&
         (num % 7 === 0) &&
         (String(num).length === [...new Set(String(num).split(''))].length)
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(1000000000000000)); // "Invalid request."
