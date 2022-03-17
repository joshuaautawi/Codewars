function sequence(x) {
  // Do
  let arr = [];
  let i = 0;
  while (i < x) {
    arr.push(i + 1);
    i++;
  }
  return arr.sort();
}
