// accept a string as argument
// 

function cleanUp(str) {
  let cleanText = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if ((/[a-zA-Z]/).test(str[idx])) {
      cleanText += str[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  console.log(cleanText);
}

cleanUp("---what's my +*& line?");    // " what s my line "

