function summy(stringOfInts){
    let total =0
    stringOfInts.split(" ").forEach(element => total+= Number(element))
    return total
}
