/*
 - accept str as argument
 - split string apart
 - use a for loop
 - capitalize if the current number is even
 - lowercase if it's odd
 - join the array together and return it
 */

function staggeredCase(str) {
  let chars = str.split('');

  for (let idx = 0; idx < chars.length; idx += 1) {
    if (idx % 2 === 0) {
      chars[idx] = chars[idx].toUpperCase();
    } else {
      chars[idx] = chars[idx].toLowerCase();
    }
  }

  return chars.join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I LoVe lAuNcH ScHoOl!"
console.log(staggeredCase('ALL_CAPS'));                     // "AlL_CaPs"
console.log(staggeredCase('ignore 77 the 4444 numbers'));   // "IgNoRe 77 ThE 4444 nUmBeRs"
