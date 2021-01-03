function sequence(num) {
  let answer = [];

  for(let n = 1; n <= num; n++) {
    answer.push(n);
  }

  return answer;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]
