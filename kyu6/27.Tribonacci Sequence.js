function tribonacci(signature,n){
    //your code here
    if(n==0) return []
    if(n==1) return signature[0]
    if(n==2) return signature.slice(0,2)
    if(n==3) return signature(0,3)
    for(let i = 2 ;i+1<n ;i++){
      signature.push(signature[i]+signature[i-1]+signature[i-2])
    }
    return signature
  }
  
  