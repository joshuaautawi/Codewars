function maxPizza(cuts) {
  if (cuts < 0) return -1;
  let result = 1;
  let c = 0;
  for (let i = 0; i <= cuts; i++) {
    result += c;
    c += 1;
  }
  return result;
}
