/*
PROBLEM
- accept a string argument
- check all alphabtic characters
- if they're all capital letters, return true
- otherwise return false
- ignore characters that are not alphabetic

EXAMPLES
- t --> false
- T --> true
- Four Score --> false
- FOUR SCORE --> true
- 4SCORE --> true
- '' (empty string) --> true (interesting)
--> the last test case makes it look like we should look for 
--> lowercase letters, and return true if we don't find any

DATA STRUCTURE
- use regez

ALGORITHM
- use regex to check if any of them are a lowercase letter
*/

function isUppercase(str) {
  return !/[a-z]/.test(str);
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true
