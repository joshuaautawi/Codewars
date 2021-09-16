function reverseNumber(n) {
  
    return n<0 ? -Number(n = (-n).toString().split("").reverse().join("")) : Number(n.toString().split("").reverse().join(""))
  }