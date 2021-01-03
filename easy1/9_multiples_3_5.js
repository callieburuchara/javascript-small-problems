function multisum(num) {
  let sum = 0;

  for (let current = 1; current <= num; current += 1) {
    if (current % 3 === 0 || current % 5 === 0) {
      sum += current;
    }
  }

  console.log(sum);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168
