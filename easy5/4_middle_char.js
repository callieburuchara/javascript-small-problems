function centerOf(str) {
  const size = str.length
  let middle = Math.floor(size / 2);
  
  if (size % 2 === 0) {
    middle -= 1;
    return str.slice(middle, middle + 2);
  } else {
  return str[middle];
  }
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
