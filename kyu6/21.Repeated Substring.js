function f(s) {
  // your code here
  let str = "";
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (!str.includes(s[i])) {
      str += s[i];
    } else {
      obj[str] = true;
    }
  }
  let counter = 0;
  for (let i in obj) {
    let re = new RegExp(i, "g");
    counter = s.match(re).length;
  }
  return counter <= 1 ? [s, 1] : [str, counter];
}
