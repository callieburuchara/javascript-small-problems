const WORDS = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];

function byWord(first, second) {
  let firstWord = WORDS[first];
  let secondWord = WORDS[second];
  let words = [firstWord, secondWord].sort();

  if (words[0] === words[1]) return 0;
  if (words[0] === firstWord) return -1;
  if (words[1] === firstWord) return 1;
}

function alphabeticNumberSort(arr) {
  return arr.splice(0).sort(byWord);
}

console.log(alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
