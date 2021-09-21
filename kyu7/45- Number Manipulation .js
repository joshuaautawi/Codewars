function manipulate(num) { 
    num = num.toString()
    //Good luck!
    return Number(num.slice(0,Math.floor(num.length /2)).concat('0'.repeat(Math.ceil(num.length/2))))
    ; 
    
    } 
  