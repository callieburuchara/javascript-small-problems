function leadingSubstrings(str, start) {
  let subs = [];

  for (let endIdx = start + 1; endIdx <= str.length; endIdx++) {
    subs.push(str.slice(start, endIdx));
  }
  
  return subs;
}

function substrings(str) {
  let all_subs = [];

  for (let idx = 0; idx < str.length; idx++) {
    all_subs.push(leadingSubstrings(str, idx));
  }

  return all_subs.flat().filter(s => s.length > 1);
}

function palindromes(str) {
  return substrings(str).filter(sub => {
    return sub.split('').reverse().join('') === sub;
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
/*
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/

console.log(palindromes('knitting cassettes'));

//[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
