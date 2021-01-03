function asciiValue(str) {
  let sum = 0;

  str.split('').forEach(function(char) {
    sum += char.charCodeAt(0); 
  })

  console.log(sum);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
