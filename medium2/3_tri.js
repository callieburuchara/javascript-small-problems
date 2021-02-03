/*
- helper method: valid
  - do the three numbers sum to 180?
  - are all three numbers greater than 0?
  - Are there just three numbers?

- check to see if the input is invalid
- if one angle === 90, return right
- if one is greater than 90 return obtuse
- otherwise return acute
*/

function triangle(...degrees) {
  if (!valid(degrees)) return 'invalid'

  if (degrees.some(num => num > 90)) return 'obtuse';
  if (degrees.some(num => num === 90)) return 'right';
  return 'acute';
} 

function valid(degrees) {
  return (degrees.length === 3) &&
         (degrees.every(num => num > 0)) &&
         (degrees.reduce((acc, n) => acc + n) === 180);
}


console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
