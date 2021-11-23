function average(scores) {
    // code to calculate the average
  return Math.round((scores.reduce((a,b)=>a+b))/scores.length)
  }
  