const acak = [1, 6, 3, 2, 8, 5, 4];

function x(list, k) {
  let obj = {};
  let unique = {};
  let res = [];
  for (let i = 0; i < list.length; i++) {
    obj[list[i]] = true;
  }

  for (let i = 0; i < list.length; i++) {
    const num = [
      Math.min(k - list[i], list[i]),
      Math.max(k - list[i], list[i]),
    ] 
    if (obj[k - list[i]] && !unique[num]) {
      unique[num] = true;
      res.push(num);
    }
  }
  console.log(unique)
  return res;
}