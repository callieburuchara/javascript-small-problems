function leadingSubstrings(str) {
  let subs = [];

  for (let amount = 1; amount <= str.length; amount++) {
    subs.push(str.slice(0, amount));
  }
  
  return subs;

}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
