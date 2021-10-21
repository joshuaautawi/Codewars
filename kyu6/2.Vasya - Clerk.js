function tickets(peopleInLine){
    // ...
    let fifty = 0
    let twentyFive = 0
    let hundred = 0
    let n = 0
    while(n<peopleInLine.length){
      if(peopleInLine[n] == 25){
        twentyFive++
      }
      if(peopleInLine[n] == 50){
        fifty++
        if(twentyFive<= 0 ) return 'NO'
        else{twentyFive--}
        
        
      }
      if(peopleInLine[n] == 100){
        hundred++
        if(fifty>0 && twentyFive>0){
          fifty--
          twentyFive--
          console.log("kepanggil")
        }
        else if (twentyFive<=0) return "NO"
        
        else if (twentyFive >= 3) {
          twentyFive-=3
        }
        else if(twentyFive < 3 && fifty<1) return "NO"
      }
      n++
    }
    return "YES"
  }