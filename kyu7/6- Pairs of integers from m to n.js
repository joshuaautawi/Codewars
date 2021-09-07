function generatePairs(m, n) {
    let newArr =[]
    let x = m
    let y = m
    let counter = 0
    while(x<=n){
      
      while(y<=n){
        newArr.push([x,y])
        y++
      }
    counter++
    y = m+counter
    x++
    }
    return newArr
}