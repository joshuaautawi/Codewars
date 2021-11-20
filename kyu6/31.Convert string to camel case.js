function toCamelCase(str){
    let rex = /[^a-z]/gi
    str =str.replace(rex," ").split(" ")
    let r = ""
    str= str.forEach((e,i)=>{
      if(i==0){
        r+= e
      }
      if(i>0){
        r+=e[0].toUpperCase()
        r+=e.slice(1)
      }
    })
    return r
  }