function interleave(first, second) {
  let answer = [];

  for(let idx = 0; idx < first.length; idx ++) {
    answer.push(first[idx], second[idx]);
  }
  
  return answer;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]
