function amaroPlan(pirateNum){
    let num = (20*pirateNum)
    let arr = []
    for(let i = 0 ; i < pirateNum;i++){
      if(i %2 ==0 ){
        arr.push(1)
      }
      else{
        arr.push(0)
      }
    }
    arr[0] = num - Math.floor((arr.length-1)/2)
    return arr
  }