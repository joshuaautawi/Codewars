function getDecimal(n){
    if(n.toString().split('.').length == 1 ) return 0
    let s = n.toString().split('.')[1].length
    console.log(s)
    return Number(n.toString().split('.')[1])/10**s; // fix me 
  
  }