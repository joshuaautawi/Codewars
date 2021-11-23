function convert(number){
    // ...Convert integers given as string into ASCII uppercase letters...
    number = number.split('')
    let arr = []
    let result = ""
    for(let i = 0 ; i < number.length;i+=2){
      arr.push(number[i]+number[i+1])
    }
    arr.forEach(e=>result+= String.fromCharCode(e))
    return result
  }