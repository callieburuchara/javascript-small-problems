/*
- accept str as argument
- separate each character to by itself
- iterate over the array with map
- if the character is uppercase, make it lower
- if it's lower, make it upper
- otherwise leave it
- join together at the end
*/

function swapCase(str) {
  return str.split('').map(chr => {
    if (chr === chr.toUpperCase()) {
      return chr.toLowerCase();
    } else if (chr === chr.toLowerCase()) {
      return chr.toUpperCase();
    }
  }).join('');
} 

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
