function alphabetPosition(text) {
    let str = ""
    text = text.toLowerCase()
    for(let i = 0 ; i< text.length ;i++){
      if(/[a-z]/g.exec(text[i]) != null){
        str+= ` ${text[i].charCodeAt(0)-96}`
      }
  
    }
    return str.slice(1);
  
  }