/*
PROBLEM
- accept an array of strings
- return an array of the same strings
- except take the vowels out of each string

EXAMPLES
- might be an array of just one string/one element
- letters might upper or lower cased
- no other characters, just letters

DATA STRUCTURES
- arrays, strings

ALGORITHM
- use map to iterate over each string in the array
- use regex and replace to replace each vowel with a blank string
- then return that new array from map 

*/

function removeVowels(arr) {
  return arr.map(str => str.replace(/[aeiou]/ig, ''));
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]
