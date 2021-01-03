function buyFruit(arr) {
  let fruits = [];

  arr.forEach((sub) => {
    for (let amount = sub[1]; amount > 0; amount--) {
      fruits.push(sub[0]);
    }
  });

  return fruits;

}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
