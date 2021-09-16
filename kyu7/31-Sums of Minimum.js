function sumOfMinimums(arr) {
    // your code here
    let total = 0
    arr.forEach(element => total += Math.min(...element))
    return total
  }