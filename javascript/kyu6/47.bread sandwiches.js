function slicesToName(n) {
  if (typeof n != "number" || n < 2) {
    return null;
  }
  const bread = n % 2;
  const sandwich = Math.floor(n / 2);
  const result = "bread ".repeat(bread) + "sandwich ".repeat(sandwich);
  return result.slice(0, result.length - 1);
}

function nameToSlices(name) {
  let num = 0;
  if (!name || typeof name != "string") return null;
  name = name.split(" ");
  if (name[0] == "bread") num++;
  for (let i = 0; i < name.length; i++) {
    if (name[i] == "sandwich") num += 2;
    if (name[i] != "sandwich" && i != 0) {
      num = 0;
      break;
    }
  }
  return num < 2 ? null : num;
}
// have fun!
