function centuryEnding(twoDigits) {

  if (['11', '12', '13'].includes(twoDigits)) return 'th';

  let lastDigit = twoDigits.split('').reverse().join()[0];

  switch (lastDigit) {
  case '1': 
    return 'st';
  case '2':
    return 'nd';
  case '3':
    return 'rd';
  default:
    return 'th';
  }
}

function century(year) {
  let century = Math.trunc(year / 100);

  if (year % 100 !== 0) century += 1;
  century = String(century);

  let twoDigits = century[century.length - 2] + century[century.length - 1];

  console.log(String(century) + centuryEnding(twoDigits));
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
