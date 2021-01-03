function swap(str) {
  let wordArr = str.split(' ');

  return wordArr.map(word => {
    word = word.split('');
    let lastIdx = word.length - 1;

    [word[0], word[lastIdx]] = [word[lastIdx], word[0]]
    return word.join('');  
  }).join(' ');

}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"
