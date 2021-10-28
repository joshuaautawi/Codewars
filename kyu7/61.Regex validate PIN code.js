function validatePIN (pin) {
    //return true or false
  
    let reg = /([0-9])/g
  
    for(let i = 0 ; i < pin.length ; i++){
      if(pin[i].search(reg) == -1){
        return false
      }
    }
    return pin.length == 6 || pin.length == 4 ? true : false
  }