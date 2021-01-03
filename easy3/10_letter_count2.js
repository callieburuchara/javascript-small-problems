function wordSizes(str) {
  if (!str) return {};

  str = str.replace(/[^a-z\s]/ig, '');

  let sizes = {};

  str.split(' ').forEach(word => {
    let length = word.length;    

    if (Object.keys(sizes).includes(String(length))) {
      sizes[length] += 1; 
    } else {
      sizes[length] = 1;
    }
  });

  return sizes;


}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
