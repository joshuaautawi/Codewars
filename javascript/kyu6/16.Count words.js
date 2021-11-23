function wordCount(s) {
  const reg = /[a-z]+/gi;
  const rex = /^(a|the|on|at|of|upon|in|as)$/gi;
  let count = 0;
  s = s.match(reg);
  s = s.filter((e) => !rex.test(e));
  s.forEach((e) => {
    if (!rex.test(e)) count++;
  });

  return count;
}
