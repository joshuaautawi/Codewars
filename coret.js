function twistedSum(n) {
  let total = 0 
  for(let i = 0 ; i <= n ; i++){
    if(i <10){
      total+=i
    }
    else{
      let x  = i.toString()
      for(let y =0  ; y < x.length ; y++){
        total += Number(x[y])
      }
    }
  }
  return total
}

console.log(twistedSum(5640))