function persistence(num) {
  //code me
  num = num.toString();
  let counter = 0
 
  while(num.length > 1){
    let x = num.split("").reduce((a,b)=>Number(a)*Number(b))
    num = x.toString()
    counter++
  }
  return counter
  
}

console.log(persistence(999))