function sumOfIntegersInString(s){
    let c = 0
    let str = ""
    let newArr = []
    let checkIsInt = (x)=>{
      return Number.isInteger(Number.parseInt(x))
    }
    while(c<s.length){
      if(checkIsInt(s[c])){
        str+= s[c]
      }
      if(!checkIsInt(s[c])){
        str+= "x"
      }
      c++
    }
    let n = 0
    str = str.split("x")
    while (n<str.length){
      checkIsInt(str[n]) ?newArr.push(Number.parseInt(str[n])): n
      n++
    }
  
    return newArr.length==0 ? 0 : newArr.reduce((a,b)=>a+b)
    }
  