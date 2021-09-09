function smallestProduct(arr) {
    // Code goes here
    let c = 0
    let min = null
    while(c<arr.length){
        if(min==null) {
            min =arr[c].reduce((a,b)=>a*b)
        }
        if(arr[c].reduce((a,b)=>a*b) < min){
            min = arr[c].reduce((a,b)=>a*b)
        }
        c++
    }
    return min
}