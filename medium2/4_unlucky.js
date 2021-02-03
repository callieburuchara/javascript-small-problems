/*
PROBLEM:
- input: year
- output: integer, the amount of Friday the 13ths in that year

EXAMPLES
- all input years will be after 1752
- 1986: 1
- 2015: 3
- 2017: 2

QUESTIONS
- how to determine how many Friday the 13ths there are in a year?
- Date objects?

ALGORITHM
- iterate over all months of a given year
- For each month, get the day that falls on the 13th
- Count the 13ths that fall on a Friday
- return that count


- initialize Jan 1 of that year
- set Friday to 5
- set counter to 0
- use a for loop to iterate over the date
  - month = 0
  - while month < 12
  - setMonth(month)
  - setDate(13)
  - if getDay() returns 5, then increment the counter
*/



function fridayThe13ths(year) {
  let date = new Date(`${year}-01-01`);
  let friday = 5;
  let counter = 0;

  for (let month = 0; month < 12; month += 1) {
    date.setMonth(month);
    date.setDate(13);
    if (date.getDay() === friday) counter += 1;
  }

  return counter;
}

// ANOTHER APPROACH

function fridayThe13ths(year) {
  let thirteenths = 0;

  for (let month = 0; month < 12; month += 1) {
    date = new Date(year, month, 13);
    if (date.getDay() === 5) thirteenths += 1;
  }

  return thirteenths;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
