function negative(num) {
  let str = String(num);

  if (str[0] === '-') return Number(str);
  return Number('-' + str);
}

// GIVEN SOLUTION

function negative(num) {
  return Math.abs(num) * -1;
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0
