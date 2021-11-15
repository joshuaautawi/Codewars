function oddRow(n) {
  let c = 0
  let r =1
  let total = 0
  for(let i =0  ;i < n ;i++){
    r= r+c
    c+=2
    total++
  }
  let result = []
  for(let i = 0 ; i< total ;i++){
    result.push(r)
    r= r+2
  }
  return result
}

console.log(oddRow(5))