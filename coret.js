function battle(x, y) {
  // Lets the battle begin!
  let num1 = 0;
  let num2 = 0;
  for (let i = 0; i < x.length; i++) {
    const c = x[i].charCodeAt(0);
    console.log(c)
    if (c > 64 && c <= 90) {
      num1 += c - 64;
    } else {
      num1 += (c - 96)/2;
    }
  }
  console.log(num1)
  for (let i = 0; i < y.length; i++) {
    const c = y[i].charCodeAt(0);
    console.log(c)
    if (c > 64 && c <= 90) {
      num2 += c - 64;
    } else {
      num2 += (c - 96)/2;
    }
  }
  console.log(num2)
  if (num1 - num2 == 0 ) return "Tie"
  return num1 - num2 < 0 ? y : x;
}

// console.log(battle("One", "Two"));
// console.log(battle("One","Neo"))

console.log(battle("o","O"))