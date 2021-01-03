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

  return all_subs.flat();
}

console.log(substrings('abcde'));

// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/
