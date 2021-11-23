function maxMultiple(divisor, bound){
    //your code here
    let n = divisor
    let result = 0
    while(n<=bound){
      n%divisor ==0 &&  n <= bound && n > 0 && n > result? result = n : result
      n++
    }
    return result
  }
  //OR


  function MaxMutiples(divisor,bound){
      return bound - (bound % divisor)
  }
