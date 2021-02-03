/*
PROBLEM
- Accept a sentence string as argument
- Return string with every occurence of a number word replaced with its
  corresponding digit character

EXAMPLES
- Looks like all input will be valid
- The number words are only numbers 1-5 (but I'll make it valid til 9)
- All words are separated by just one space, including number words
- All the number words are lower case.
- Oooh there are periods there. 

DATA
- Array to iterate through each word
- Probably use map to replace each word
- Have a constant of all number words in their corresponding idx
  positions

ALGORITHM
- Create a constant of all number words
- split the input string into an array based on ' '
- use map to iterate over it
  - 
  - if the number words contains that word
    - record if there's a period there. 
    - replace it with the idx position it is in the constant
    - add a period if needed
  - otherwise, return the word as is. 

*/

const numberWords = [
  'zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine'
];

function wordToDigit(str) {
  return str.split(/\b/).map(word => {
    
    if (numberWords.includes(word.toLowerCase())) {
      return `${numberWords.indexOf(word.toLowerCase())}`;
    }
      return word;
  }).join('');

}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.')); // "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('Give me six sixes, please.')); // "Give me 6 sixes, please."
console.log(wordToDigit('Six six Seven.')); // "6 6 7"
console.log(wordToDigit('six-six seven')); // '6-6 7'
console.log(wordToDigit('')); // ''
