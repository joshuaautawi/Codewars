function incrementString(strng) {
  // return incrementedString

  let r = /[0-9]/gi;
  if (!strng.match(r)) {
    strng = strng += 1;
    return strng;
  } else if (strng.match(r)) {
    if (!strng.match(/[a-z]/gi)) {
      let a = (Number(strng.match(r).join("")) + 1).toString();
      while (a.length < strng.length) {
        a = "0" + a;
      }
      return a;
    }
    let s = strng.match(/[a-z]/gi).join("");
    let len = strng.match(r).length;
    let x = (Number(strng.match(r).join("")) + 1).toString();
    while (x.length < len) {
      x = "0" + x;
    }
    return s + x;
  }
}
