function assembleString(array) {
  if (!array.length) {
    return "";
  }
  let res = array[0].split("");
  for (let i = 0; i < array[0].length; i++) {
    if (res[i] == "*") {
      for (let x = 1; x < array.length; x++) {
        if (array[x][i] != "*") {
          res[i] = array[x][i];
        }
      }
    }
  }
  return res.join("").replace(/[*]/g, "#");
}
