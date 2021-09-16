function divCon(x){
    let total = 0
    x.forEach(element=>Number.isInteger(element)? total+= element : total -= Number(element))
    return total
  }