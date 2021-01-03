function repeater(str) {
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    answer += letter.repeat(2);
  }

  return answer;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""
