function shortestStepsToNum(num) {
  // Good Luck!

  if(num <= 1 ) return 0
  let r = 1
  let c = 2
  while(num != c){
    if(c*2 > num){
      c = c+1
      console.log(c)
      r++
      return r
    }
    
    c = c*2
    r++

  }
  return r;
}

console.log(shortestStepsToNum(71))