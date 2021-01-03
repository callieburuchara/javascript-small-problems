function logInBox(str) {
  let topBottomBorders = '+-' + '-'.repeat(str.length) + '-+';
  let topBottomSpaces = '| ' + ' '.repeat(str.length) + ' |';
  let mainText = '| ' + str + ' |';

  console.log(topBottomBorders);
  console.log(topBottomSpaces);
  console.log(mainText);
  console.log(topBottomSpaces);
  console.log(topBottomBorders);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');

