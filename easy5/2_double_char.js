const EXCEPTIONS = /[aeiou0-9\s-!]/i

function doubleConsonants(str) {
  let answer = '';

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    let amount = (EXCEPTIONS.test(letter) ? 1 : 2)

    answer += letter.repeat(amount);
  }

  return answer;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
