function spinWords(string){
    //TODO Have fun :)
    string = string.split(" ")
    let str = ""
    string.forEach(e=>{
        if(e.length <5){
            str+= " " + e
        }
        else{
            str+= " "+ e.split("").reverse().join("")
        }
    })
    return str.slice(1)
}