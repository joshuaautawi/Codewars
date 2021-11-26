function sumFibs(n) {
  // you are the golden ratio.
  let f = 0;
  let s = 1;
  let c = 0;
  if (n == 1) return 0;
  if (n == 2) return 0;
  for (let i = 2; i <= n; i++) {
    let t = f + s;
    if (t % 2 == 0) {
      c += t;
    }

    f = s;
    s = t;
  }
  return c;
}
