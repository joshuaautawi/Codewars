function getDivisorsCnt(n){
  // todo
  let arr = []
  for(let i = 1 ; i < n+1 ;i++){
    if(n%i == 0 ){
      arr.push(i)
    }
  }
  return arr.length
}