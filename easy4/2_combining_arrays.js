function union(first, second) {
  const combined = first.concat(second);
  return [...new Set(combined)];
}

console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]
