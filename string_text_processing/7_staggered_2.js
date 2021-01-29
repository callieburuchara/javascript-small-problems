/*
- accept str as argument
- set capitalize to TRUE
- split the characters into an array
- iterate over the array with map
  - if the character is a letter
  - capitalize if true, otherwise lowercase
  - set capitalize to its opposite
  - if it's not a letter, return the character as is
 - return the joined together array
*/

function staggeredCase(str) {
  let capitalize = true;

  return str.split('').map(char => {
    if (/[a-z]/i.test(char)) {
      char = capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize
    }
    return char;
  }).join('');

}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"
