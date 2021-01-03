function countOccurrences(arr) {
  let occurences = {};

  for(let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (Object.keys(occurences).includes(word)) {
      occurences[word] ++
    } else {
      occurences[word] = 1
    }
  }

  return occurences;
}

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
