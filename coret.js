function shiftedDiff(first, second) {
  // ...
  for (let i = 0; i < second.length; i++) {
    second = second.slice(1) + second[0];
    console.log(second);
    if(second == first) return i+1
  }
  return -1;
}

console.log(shiftedDiff("eecoff", "coffee"));
