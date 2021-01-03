const rlSync = require('readline-sync');

let age = rlSync.question('What is your age? ');
let retire = rlSync.question('At what age would you like to retire? ');

let currentYear = new Date().getFullYear();

let waitingTime = Number(retire) - Number(age);
let retireYear = currentYear + waitingTime;

console.log(`It's ${currentYear}. You will retire in ${retireYear}.`);
console.log(`You have only ${waitingTime} years of work to go!`);
