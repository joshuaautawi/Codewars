function duplicateCount(text) {
  //...
  text = text.toLowerCase();
  let obj = {};
  for (let i = 0; i < text.length; i++) {
    obj[text[i]] = obj[text[i]] + 1 || 1;
  }
  let r = "";
  for (let i in obj) {
    if (obj[i] > 1) {
      r += obj[i];
    }
  }
  return r.length;
}
