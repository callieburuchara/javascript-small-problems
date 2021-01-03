function stringy(num) {
  let number = '1';
  let finalString = '';

  while (finalString.length < num) {
    finalString += number;
    number = (number === '1' ? '0' : '1')
  }

  console.log(finalString);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"
