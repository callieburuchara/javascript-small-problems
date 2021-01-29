/*
- accept string of words
- make entire string downcase
- split string apart by ' '
- iterate over each word with map
- capitalize each word (first letter cap + rest of the word slice)
- join the array back together and return it
*/

function wordCap(str) {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
