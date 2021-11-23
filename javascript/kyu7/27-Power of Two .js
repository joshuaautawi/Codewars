function isPowerOfTwo(n){
    //.. should return true or false ..
    let c = 2
    while(c<=n){
        c= c*2
    }
    return n==1 ? true :  c/2 ==n
  }