function triangle(num) {
  for (let stars = 1; stars <= num; stars += 1) {
    console.log(' '.repeat(num - stars) + '*'.repeat(stars));
  }
}

triangle(5);
triangle(9);
