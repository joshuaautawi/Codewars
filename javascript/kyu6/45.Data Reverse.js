function dataReverse(data) {
  // Your code here
  let n = 0;
  let r = [];
  for (let i = 8; i <= data.length; i += 8) {
    r.push(data.slice(n, i));
    n = i;
  }
  return r.reverse().flat(1);
}
