function narcissistic(value) {
    // Code me to return true or false
    value = value.toString()
    const len = value.length 
    let total = 0
    for(let i = 0 ; i < len ; i++){
      total += Number(value[i] ** len)
    }
    return total== value ? true : false
  }