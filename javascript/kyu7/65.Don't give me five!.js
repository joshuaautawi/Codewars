function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (!i.toString().match(/5/gi)) count++;
  }
  return count;
}
