function sumEvenNumbers(input) {
    // [...]
    input[0]%2 != 0 ? input[0]= 0 : input[0]
    return input.reduce((a,b)=>b%2 == 0 & a%2 == 0 ? a+b : a)
  }