function duplicateEncode(word){
    // ...
    word = word.toLowerCase()
    let str = ""
    let result = {}
    for(let i = 0 ;i < word.length ;i++){
        if(!result[word[i]]){
            result[word[i]] = 1
        }
        else{
            result[word[i]] = result[word[i]]+1
        }  
    }
    for(let i = 0 ; i <word.length;i++){
        if(result[word[i]] > 1){
            str += ")"
        }
        else{
            str+= "("
        }
        
    }
    return str
}


console.log(duplicateEncode("recede"))

console.log(duplicateEncode("Success"))

const x = {a: 1}
 
x.a = x.a+1
console.log(x)