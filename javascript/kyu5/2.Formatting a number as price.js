var numberToPrice = function (number) {
  if (typeof number != "number") {
    return "NaN";
  }
  number = number.toString();
  if (number.includes(".")) {
    const num = number.split(".");
    let first = num[1][0];
    let second = num[1][1] ? num[1][1] : "0";
    if (num[0].length < 4) {
      return num[0] + "." + first + second;
    } else {
      let result = "";
      let c = num[0].length;
      let n = 0;
      while (c != 0) {
        if (n >= 3 && num[0][c - 1] != "-") {
          result += ",";
          n = 0;
        }
        result += num[0][c - 1];
        n++;
        c--;
      }
      let r = "";
      for (let i = result.length; i > 0; i--) {
        r += result[i - 1];
      }
      return r + "." + first + second;
    }
  } else {
    let result = "";
    let c = number.length;
    let n = 0;
    while (c != 0) {
      if (n == 3) {
        result += ",";
        n = 0;
      }
      result += number[c - 1];
      n++;
      c--;
    }
    let r = "";
    for (let i = result.length; i > 0; i--) {
      r += result[i - 1];
    }

    return r + ".00";
  }
};
