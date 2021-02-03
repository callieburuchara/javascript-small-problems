/*
PROBLEM
- input: string (always at least once character)
- output: object with percentages of lower, upper, and neither

EXAMPLES
- output is in this format: 
  {lowercase: "0.00", uppercase: "0.00", neither: "0.00"}
- percentage has two decimal digits no matter what
- all three keys are included even if the value is 0

DATA
- Can use a for loop to iterate through the string
- Or can turn it into an array to use forEach
- String (input)
- Object (output)
- Number (percentage), but then turned into a string

ALGORITHM
- accept a string as input
- initialize up, low, and neither variables to 0
- iterate over each character in the string
  - if it's an upper case, += 1 to up
  - "" lowercase, += 1 to low
  - "" neither, += 1 to neither
- reassign up, low, and neither to the length of the str divided by themselves
- return the template object w current numbers at the end. Format the numbers using toFixed(2)
*/

function letterPercentages(str) {
  let ratios = {lowercase: 0, uppercase: 0, neither: 0};

  for (let idx = 0; idx < str.length; idx += 1) {
    let char = str[idx];

    if (/[A-Z]/.test(char)) {
      ratios.uppercase += 1;
    } else if (/[a-z]/.test(char)) {
      ratios.lowercase += 1;
    } else {
      ratios.neither += 1;
    }
  }

  ratios.lowercase = ((ratios.lowercase / str.length) * 100).toFixed(2);
  ratios.uppercase = ((ratios.uppercase / str.length) * 100).toFixed(2); 
  ratios.neither = ((ratios.neither / str.length) * 100).toFixed(2);

  return ratios;
}

// GIVEN SOLUTION TO REMEMBER

function letterPercentages(str) {
  const length = str.length;

  return {
    lowercase: (((str.match(/[a-z]/g) || []).length / length) * 100).toFixed(2),
    uppercase: (((str.match(/[A-Z]/g) || []).length / length) * 100).toFixed(2),
    neither: (((str.match(/[a-z]/gi) || []).length / length) * 100).toFixed(2),
  }
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
