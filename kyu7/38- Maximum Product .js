function adjacentElementsProduct(array) {
    // max product
    let max = null
    for(let i = 0 ; i < array.length;i++){
      let result = array[i]*array[i+1]
      max == null ? max = result : max
      if(result > max){
        max = result
      }
    }
    return max
  }
  