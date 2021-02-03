/*
PROBLEM
- two inputs: number and amount of rotations (n)
- function should rotate the last N digits of NUMBER
- rotate by one digit to the left, moving the first digit to the end

EXAMPLES
- When N is 1, the output is same as the input number
- When N is 2, the last two numbers switch places
- When N is 3, the last 3 digits do a once rotation
- When N is 4, the last 4 digits do a once rotation
- When N is 5, the last 5 digits to a once rotation
- If N is equal to the length, it behaves just like the 1_rotation.js problem does

DATA
- Should convert to a String or Array so that I can use slice
- Then just need to return it as a Number at the end

ALGORITHM
- accept a NUMBER and N as input
- turn the NUMBER into a string version of itself
- save the length of the input string: LENGTH
- separate the string into a two item array:
  - [rest of the number, N last digits of the number]
- pass the N last digits of the number to the rotate method
- join the rest and the rotated rest of the number back together
- turn it into a number and return it

*/

function rotateRightmostDigits(number, n) {
  number = String(number);
  let length = number.length;
  let separate = [number.slice(0, length - n), number.slice(length - n)];
  separate[1] = rotate(separate[1]);
  
  return Number(separate.join(''));
}

function rotate(input) {
  if (input.length < 2) return input;

  return input.slice(1) + input[0];
}




console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
