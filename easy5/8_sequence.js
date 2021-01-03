function sequence(count, starter) {
  let answer = [];

  for(let num = starter; answer.length < count; num += starter) {
    answer.push(num);
  }

  return answer;
  
}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []
