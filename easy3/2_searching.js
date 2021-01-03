const rlSync = require('readline-sync');

const numbers = [];

numbers.push(rlSync.question('Enter the 1st number: '));
numbers.push(rlSync.question('Enter the 2nd number: '));
numbers.push(rlSync.question('Enter the 3rd number: '));
numbers.push(rlSync.question('Enter the 4th number: '));
numbers.push(rlSync.question('Enter the 5th number: '));
let last = rlSync.question('Enter the last number: ');

let determiner = (numbers.includes(last) ? 'appears' : 'does not appear')

console.log(`The number ${last} ${determiner} in ${numbers}.`);
