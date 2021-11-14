function high(x) {
  let r = 0;
  let rs = "";
  let t = 0;
  let s = "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] != " ") {
      t += x.charCodeAt(i) - 96;
      s += x[i];
    } else if (x[i] == " ") {
      if (t > r) {
        r = t;
        rs = s;
      }
      t = 0;
      s = "";
    }
  }
  if (t > r) {
    r = t;
    rs = s;
  }
  return rs;
}
