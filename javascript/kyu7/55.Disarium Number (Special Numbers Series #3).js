function disariumNumber(n){
    //your code here
    c = n.toString().split("").map(e=> Number(e))
    const result = c.reduce((a,b,i)=>{
      i = i+1
      return a +b**i
    })
    return result==n ? "Disarium !!" : "Not !!"
  }
  