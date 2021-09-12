function convert(degrees) {
    // your solution goes here
    console.log(degrees)
    if(!degrees) return [0]
    let arr =[]
    arr.push(parseInt(degrees))
    let result = parseFloat(degrees - parseInt(degrees))*60
   
    result ? arr.push(parseInt(result)) :result
    result = parseFloat(result - parseInt(result))*60
    // console.log(result)
    result ? arr.push(Math.round(result)) : result
    return arr[0]==0 && arr[1]==0 && arr[2] == 0 ? [0] : arr
  }