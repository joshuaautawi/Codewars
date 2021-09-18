function reverseBits (n) {
    // your code here
    n = n.toString(2).split('').reverse().join('')
    return parseInt(n,2)
  }
  