function middleMe(N, X, Y){
    //get a working solution then try to make it less than 70 characters!
    if(N%2 != 0 )return X
    return `${Y.repeat(N/2)}${X}${Y.repeat(N/2)}`
}