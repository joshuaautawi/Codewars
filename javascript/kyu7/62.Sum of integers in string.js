function sumOfIntegersInString(s){
    let rex = /[^0-9]/gi
    let arr =s.split(rex)
    arr = arr.filter(e=>e).map(e=> Number(e))
    if(arr.length == 0 ) return 0
    arr = arr.reduce((a,b)=>a+b)
    return arr// what the function name says
}