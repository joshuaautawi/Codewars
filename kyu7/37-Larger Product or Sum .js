function sumOrProduct(array, n) {
    // your code here
    array = array.sort((a,b)=>b-a)
    let sum = array.filter((element, index)=> index <n).reduce((a,b)=>a+b)
    let x = array.filter((element, index)=> index >array.length -1- n).reduce((a,b)=> a*b)
    return sum > x ? 'sum' : sum == x ? 'same' : 'product'
  }