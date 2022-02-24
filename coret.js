function toStrings(word) {
  let obj = {};
  for (let i = 0; i < word.length; i++) {
    obj[word[i].charCodeAt(0)] = obj[word[i].charCodeAt(0)] ? obj[word[i].charCodeAt(0)] + 1 : 1;
  }
  let res = "";
  console.log(obj)
  for (let i in obj) {
    let s = String.fromCharCode(i).repeat(obj[i]);
    // console.log(s)
    res += s;
  }
  return res;
}

function funWithAnagrams(text) {
  // Write your code here

  const result = [];
  const compare = [];
  for (let i = 0; i < text.length; i++) {
    const r = toStrings(text[i]);
    // console.log(r)
    if (!compare.includes(r)) {
      compare.push(r);
      result.push(text[i]);
    }
  }
  return result;
}

console.log(funWithAnagrams(["code", "aaagmnrs", "anagrams", "doce"]));
