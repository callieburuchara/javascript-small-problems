function findFibonacciIndexByLength(length) {
  let fibArray = [1, 1];

  while (String(fibArray[fibArray.length - 1]).length < length) {
    fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
  }

  console.log(fibArray.length);
}

findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
