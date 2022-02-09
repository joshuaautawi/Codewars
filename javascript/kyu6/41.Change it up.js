function changer(str) {
  // happy coding!
  const v = /[aeiou]/gi;
  const all = /[a-z]/gi;
  const n = /[0-9]/gi;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "Z" || str[i] == "z") {
      result += "A";
    } else if (str[i].match(n) != null) {
      result += str[i];
    } else if (str[i].match(all) != null) {
      const n = Number(str[i].charCodeAt(0)) + 1;
      let r = String.fromCharCode(n);
      if (r.match(v) != null) {
        r = r.toUpperCase();
      } else {
        r = r.toLocaleLowerCase();
      }
      result += r;
    } else {
      result += str[i];
    }
  }
  return result;
}
