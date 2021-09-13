function seven(m) {
    // your code
  
      let result = []
      let counter = 0
  
      let last = (x)=>{
          x = x.toString() 
          m = (Number.parseInt(x.slice(0,x.length-1))) - (Number.parseInt(x[x.length-1]) *2)
      }
  
      while(m.toString().length > 2){
          counter++
          last(m)
      }
  
      if(m.toString().length <=2 ) result.push(m,counter)
      return result
  } 
  
  
  console.log(seven(1021))