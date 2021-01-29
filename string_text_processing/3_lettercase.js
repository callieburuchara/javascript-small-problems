/*
PROBLEM
- accept a string as an argument
- create an object with three properties: lowercase, uppercase, 
                                           and neither

EXAMPLES
- all properties will be present, even when there's 0 of that kind
- spaces count as 0, as do symbols and numbers
- letters count as lower or upper case, everything else is neither

DATA
- could either iterate through each char as an array
- or use a for loop
- so might use an array, or might just keep it as a string

ALGORITHM
- create an object with the three properties, and all values of 0
- iterate over each character
- add to the object values appropriately using if/else
- return the object

*/

function letterCaseCount(str) {
  let count = {lowercase: 0, uppercase: 0, neither: 0};
  
  str.split('').forEach(letter => {
    if (/[a-z]/.test(letter)) {
      count.lowercase += 1;
    } else if (/[A-Z]/.test(letter)) {
      count.uppercase += 1;
    } else {
      count.neither += 1;
    }
  });
  
  return count;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }
