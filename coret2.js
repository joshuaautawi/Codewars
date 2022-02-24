function selectStock(saving, currentValue, futureValue) {
  // Write your code here
  let profit = 0;
  for (let i = 0; i < currentValue.length; i++) {
    for (let y = i; y < currentValue.length; y++) {
      if (saving >= currentValue[i] + currentValue[y] && i != y) {
        console.log(i, y);
        console.log(
          futureValue[i] + futureValue[y] - currentValue[i] - currentValue[y]
        );
        if (
          futureValue[i] + futureValue[y] - currentValue[i] - currentValue[y] >
          profit
        ) {
          profit =
            futureValue[i] + futureValue[y] - currentValue[i] - currentValue[y];
        }
      }
    }
  }
  return profit;
}

console.log(selectStock(250, [175, 133, 109, 97], [200, 125, 128, 228, 133]));
