function sortThePile(pileOfTowels, weeklyUsedTowels) {
  // Your code here
  weeklyUsedTowels.forEach((e) => {
    let basket = pileOfTowels
      .slice(-e)
      .sort()
      .reverse();
      console.log(basket)
    pileOfTowels = pileOfTowels.slice(0, -e);
    pileOfTowels.push(...basket);
  });
  return pileOfTowels;
}

console.log(sortThePile(["blue", "red", "blue", "red", "blue"], [3]));
