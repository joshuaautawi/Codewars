function camelize(str) {
  //...
  console.log(str);
  if (!str) return "";
  str = str.toLowerCase();
  str = str.split(/[^A-Za-z0-9]/gi);
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i]) {
      result += str[i][0].toUpperCase() + str[i].slice(1);
    }
  }
  return result;
}
