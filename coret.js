// let arr = [1,"*" , 5 , "+" , 7 , "*" , 10, "/" , 2,"+",2]

// let r = [ ]

// for(let i = 0 ; i < arr.length ;i++){
  
//   if(arr[i] == "*"){
//     r.push(arr.shift(arr[i-1]) * arr[i+1])
//   }
//   if(arr[i] == "/" && arr[i-3] ){
//     r.push(arr[i-1] / arr[i+1])
//   }
  
// } 
// console.log(r)
function sumOfIntegersInString(s){
  let rex = /[^0-9]/gi
  let arr =s.split(rex)
  arr = arr.filter(e=>e).map(e=> Number(e))
  if(arr.length == 0 ) return 0
  arr = arr.reduce((a,b)=>a+b)
  return arr// what the function name says
}

console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"))
console.log(sumOfIntegersInString("a bh njj"))