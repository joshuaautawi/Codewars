function solution(number){
    console.log(number)
    if(number<0|| !number) return 0 
    let arr = []
    for(let i = 0 ; i< number ; i++){
      i%3==0 || i%5==0 ? arr.push(i) : i
    }
    return arr.reduce((a,b)=>a+b)
  }