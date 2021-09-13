function i(word) {
    //.. 
    const reg = /[aeiuo]/gi
    if(!word) return 'Invalid word'
    if(word[0] == "I" || word[0] == word[0].toLowerCase()) return 'Invalid word'
    let c = 0
    let counter = 0
    while(c<word.length){
        if(word[c].search(reg))counter++
        c++
    }
    if(counter <= (word.length-counter))return "Invalid word"
    
    return "i".concat(word)
  }
  