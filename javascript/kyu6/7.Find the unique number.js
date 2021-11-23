function findUnique(numbers) {
    // Return the unique number
    let result = {}
    numbers.forEach(e=>{
      result[e] = result[e]+1 || 1
    })
    let c = Object.keys(result)
    for(let i = 0 ; i < c.length ; i++){
      if(result[c[i]] == 1){
        return Number(c[i])
      }
    }
  }