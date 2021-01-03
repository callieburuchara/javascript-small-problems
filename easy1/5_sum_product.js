const rlSync = require('readline-sync');

function computeSum(integer) {
  let sum = 0;

  for (let current = 1; current <= integer; current += 1) {
    sum += current;
  }

  return sum;
}

function computeProduct(integer) {
  let product = 1;

  for (let current = 1; current <= integer; current += 1) {
    product *= current;
  }

  return product;
}
 ///////////////

let integer;
while (true) {
  integer = parseInt(rlSync.question('Please enter an integer greater than 0: '));

  if (integer > 0) break;
  console.log('Sorry, it has to be a number greater than 0.');
}

let response;
while (true) {
  response = rlSync.question('Enter "s" to compute the sum or "p" to compute the product. ');
  if (response === 's' || response === 'p') break;
  console.log('Sorry, it has to be either "s" or "p"');
}

let answer;
let calculation;
if (response === 's') {
  answer = computeSum(integer);
  calculation = 'sum';
} else {
  answer = computeProduct(integer); 
  calculation = 'product';
}

console.log(`The ${calculation} of the integers between 1 and ${integer} is ${answer}.`);



