function sortThePile(pileOfTowels, weeklyUsedTowels) {
  // Your code here
  weeklyUsedTowels.forEach((e) => {
    if (e != 0) {
      let basket = pileOfTowels.slice(-e).sort().reverse();
      console.log(basket);
      pileOfTowels = pileOfTowels.slice(0, -e);
      pileOfTowels.push(...basket);
    }
  });

  return pileOfTowels;
}
