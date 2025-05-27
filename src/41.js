function fibonacci(n) {
  if (n <= 1) return n;
  let previous = 0,
      current = 1,
      nextTerm;

  for (let i = 2; i <= n; i++) {
    nextTerm = previous + current;
    previous = current;
    current = nextTerm;
  }
  return current;
}
