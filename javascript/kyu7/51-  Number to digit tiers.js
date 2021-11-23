function createArrayOfTiers(num) {
    num= num.toString()
    return num.split('').map((e,i)=>num.slice(0,i+1))
  }
  