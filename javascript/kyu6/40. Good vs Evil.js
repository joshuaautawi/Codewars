function goodVsEvil(good, evil) {
  if (!good) return "Battle Result: Evil eradicates all trace of Good";
  if (!evil) return "Battle Result: Good triumphs over Evil";
  const g = [1, 2, 3, 3, 4, 10];
  const e = [1, 2, 2, 2, 3, 5, 10];
  let r1 = 0;
  let r2 = 0;
  good = good.split(" ");
  evil = evil.split(" ");

  for (let i = 0; i < good.length; i++) {
    r1 += Number(good[i]) * g[i];
  }
  for (let i = 0; i < evil.length; i++) {
    r2 += Number(evil[i]) * e[i];
  }

  return r1 > r2
    ? "Battle Result: Good triumphs over Evil"
    : r1 == r2
    ? "Battle Result: No victor on this battle field"
    : "Battle Result: Evil eradicates all trace of Good";
}
