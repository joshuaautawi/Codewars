function sortVowels(s){
    //code
    if(!s) return ''
    let c = 0
    let newStr =''
    let rex = /[aeiou]/gi
    while (c < s.length){
    
        if(s[c].search(rex)){
            newStr+=`${s[c]}|\n`
        }
        else{
            newStr+= `|${s[c]} \n`
        }
        c++
    }
    return newStr.slice(0,newStr.length-2)
  }