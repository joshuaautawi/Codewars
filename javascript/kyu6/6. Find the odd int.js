function findOdd(A) {
    //happy coding!
    let result = {}
    A.forEach(e=>{
      result[e] = result[e]+1 || 1
    })
    const x = Object.keys(result)
    for(let i = 0 ;i<x.length;i++ ){
      if(result[x[i]] %2 !=0){
        return Number(x[i])
      }
    }
  }