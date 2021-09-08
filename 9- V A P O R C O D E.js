function vaporcode(string) {
    let string1 = string.toUpperCase().split(" ").join("")
    let emptyString = ""
        for(let i = 0 ; i< string1.length ; i++){
            emptyString += `${string1[i]}  `
         
        }    
    
        
    return emptyString.substring(0,emptyString.length-2)
  }