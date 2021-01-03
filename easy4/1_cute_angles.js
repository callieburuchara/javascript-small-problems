/*
- input: a decimal number
- output: degrees°minutes'seconds" of the input number

CALCULATION
- degrees is the entire number before the decimal point. No rounding
- for minutes, multiply the remaining decimal by 60. Use the whole number part of the answer
- for seconds, multiply the new remaining decimal by 60
-- round down when needed, so use Math.floor

ALGORITHM
- accept a float as argument
- set degrees to parseInt(input)
- set transition to 60 * input % 1
- set minutes to parseInt(transition)
- set seconds to transition % 1 * 60 rounded down
- return all numbers formatted correctly in a string
*/

function dms(floatNumber) {
  const degrees = parseInt(floatNumber);
  let transition = 60 * (floatNumber % 1);
  const minutes = parseInt(transition);
  const seconds = Math.floor(60 * (transition % 1));
  return `${degrees}°${minutes}'${seconds}"`;
}

// PAD WITH ZEROES AND DO THE FURTHER EXPLORATION. AND USE CONSTANTS

console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"
