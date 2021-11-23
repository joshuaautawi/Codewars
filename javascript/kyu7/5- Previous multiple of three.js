const prevMultOfThree = n => {
    //your solution
    return n == 0? null : n%3 ==0 ? n : prevMultOfThree(Number.parseInt(n/10))
  
  }