/*
PROBLEM
- Find the maximum rotation of the input number
- Write a function called maxRotation that accepts a number as arg
- First rotate the entire thing. Then move to the right and rotate
  that whole thing. Keep moving right each time. 

EXAMPLES
- The length of the input number - 1 is the amount of rotations it goes through
- Leading zeroes resulting from rotation are dropped

DATA
- Turn it into a String again for use of slice
- Will use the rotateRightmostDigits for this, too

ALGORITHM
- accept a number as argument
- turn the input number into a string
- using a for loop, start at the input's length and rotate it
- working the way down to doing the entire number
- then return the Number version of the input
*/

function maxRotation(number) {
  let numString = String(number);

  for (let n = numString.length; n > 0; n -= 1) {
    numString = rotateRightmostDigits(numString, n);
  }

  return Number(numString);
}


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

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845
