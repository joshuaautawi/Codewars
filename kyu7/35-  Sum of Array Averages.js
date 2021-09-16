const sumAverage = (arr) => {
    let result = 0 
    arr.forEach(element =>result+= element.reduce((a,b)=>(a+b))/element.length)
    return Math.floor(result)
  }