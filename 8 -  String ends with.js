function solution(str, ending){
    // TODO: complete
    let endLength = ending.length
    if(ending == ""){
      return true 
    }
    return str.slice(-endLength) == ending 
    
  }