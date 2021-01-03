const rlSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = Number(rlSync.prompt());

console.log('Enter the width of the room in meters:');
let width = Number(rlSync.prompt());

let squareMeters = length * width;
let squareFeet = squareMeters * 10.7639

console.log(`The area of the room is ${squareMeters} square meters (${squareFeet} square feet).`);
