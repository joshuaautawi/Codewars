function digital_root(n) {
    // ...
    n = n.toString()
    while(n.length != 1){
      let x = n.split("").reduce((a,b)=>Number(a)+Number(b))
      n = x.toString()
    }
    return Number(n)
  }