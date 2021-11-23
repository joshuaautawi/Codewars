function switcher(x){
    const list = {
        '27' : '!',
        '28' : '?',
        '29' : " "
    }
    let c = 0
    while(c<26){
        list[`${26-c}`] =String.fromCharCode(97+c) 
        c++
    }
    let result = ""
    x.forEach(element => {
       result += list[element]
    })
    return result
 }