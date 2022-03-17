function isNice(arr) {
  if (arr.length == 0) return false;
  let res = true;
  arr.forEach((e) => {
    const min = e - 1;
    const add = e + 1;
    if (!arr.includes(min) && !arr.includes(add)) {
      res = false;
    }
  });
  return res;
}
