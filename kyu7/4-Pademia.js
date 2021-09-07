function infected(s) {
  
    let kena = 0
    let aman = 0
    let n = 0
    let x = s.split("X")
  
    while(n<x.length){
      if(x[n].includes(1)){
        kena+= x[n].length
      }
      else if(x[n].includes(0)){
        aman+= x[n].length
      }
      n++
      
    }
  
    return kena==0 && aman== 0 ?0.00000001 : 100*kena/(kena+aman)
  }