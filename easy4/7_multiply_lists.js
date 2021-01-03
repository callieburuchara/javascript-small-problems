function multiplyList(first, second) {
  let answer = [];

  for(let idx = 0; idx < first.length; idx ++) {
    answer.push(first[idx] * second[idx])
  }

  return answer;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]
