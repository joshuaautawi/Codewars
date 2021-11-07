function arrayDiff(a, b) {
  if (b.length == 0 || a.length == 0) return a;
  let obj = {};
  const result = [];
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] ? (obj[a[i]] = obj[a[i]] + 1) : (obj[a[i]] = 1);
  }
  for (let i = 0; i < b.length; i++) {
    obj[b[i]] ? (obj[b[i]] = 0) : (obj[b[i]] = 0);
  }
  for (let i in obj) {
    if (obj[i] > 1) {
      for (let z = 0; z < obj[i]; z++) {
        result.push(Number(i));
      }
    } else if (obj[i] > 0) {
      result.push(Number(i));
    }
  }
  return result;
}
