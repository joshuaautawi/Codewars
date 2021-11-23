function containAllRots(strng, arr) {
    // your code
    if(arr.length == 0 || !strng) return true
    const allRot = []
    let c = 0
    while(c<strng.length){
        strng = strng[strng.length-1].concat(strng.slice(0,strng.length-1))
        allRot.push(strng)
        c++
    }
    let counter = 0
    allRot.forEach(element =>{
        arr.forEach(arr =>{
            if(element==arr) counter++
        })
    })
    return counter == allRot.length ? true : false
}
