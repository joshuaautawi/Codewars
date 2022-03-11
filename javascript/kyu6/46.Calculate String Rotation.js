function shiftedDiff(first, second) {
  // ...
  if (first == second) return 0;
  for (let i = 0; i < second.length; i++) {
    second = second.slice(1) + second[0];
    if (second == first) return i + 1;
  }
  return -1;
}
