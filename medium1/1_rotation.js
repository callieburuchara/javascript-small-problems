/*
PROBLEM
- Given an array, rotate the array by moving the first element to the end and then
  moving each array item up one
- Do not modify the original array
- If the input is NOT an array, return undefined
- If the input is an EMPTY array, return an empty array
- If the array has just one item, return the original array
- Array might have strings, numbers, or an object as elements

EXAMPLES
- Below. Captured in problem.

DATA
- Validate the input with Array.isArray(input)
- Arrays

ALGORITHM
- Validate the input
- use slice to return the rotated array

*/

function rotateArray(input) {
  if (!Array.isArray(input)) return undefined;
  if (input.length < 2) return input;

  return input.slice(1).concat(input[0]);
}



console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
