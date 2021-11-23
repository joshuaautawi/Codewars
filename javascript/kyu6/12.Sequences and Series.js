function getScore(n) {
    // do your magic here
    let total = 0
    let add = 50
    for(let i =1 ; i<= n;i++){
      
      total+= add
      add = add+50
    }
    return total
  }