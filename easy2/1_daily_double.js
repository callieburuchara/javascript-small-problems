function crunch(string) {
  let finalString = '';
  let currentChar;

  string.split('').forEach(function(letter) {
    if (currentChar === letter) return;
    finalString += letter;
    currentChar = letter;
  })

  console.log(finalString);
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
