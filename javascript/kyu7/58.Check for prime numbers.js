const isPrime = (n)=>{
    for(let i = 2 ; i*i < n ; i++){
        if(num%i == 0){
            return false
        }
    }
    return true
}